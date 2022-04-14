<?php

namespace Tests\Feature;

use App\Models\Task;
use Database\Seeders\TaskSeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Testing\Fluent\AssertableJson;
use Tests\TestCase;

class TaskTest extends TestCase
{
    use RefreshDatabase;

    /**
     * A basic test example.
     *
     * @return void
     */
    public function test_the_application_returns_a_successful_response()
    {
        $response = $this->get('/api/tasks');

        $response->assertStatus(200);
    }

    public function test_create_a_new_task()
    {
        $response = $this->postJson('/api/tasks', [
            'name' => 'Test Task',
            'completed' => false
        ]);

        $response
            ->assertStatus(201)
            ->assertJsonFragment([
                'name' => 'Test Task',
                'completed' => false
            ])
            ->assertJson(fn (AssertableJson $json) =>
                $json
                    ->has('data.created_at')
                    ->has('data.updated_at')
                    ->has('data.id'));
    }

    public function test_listing_tasks()
    {
        $this->seed(TaskSeeder::class);

        $response = $this->getJson('/api/tasks');

        $response
            ->assertStatus(200)
            ->assertJson(fn (AssertableJson $json) =>
                $json
                    ->has('data', 10)
                    ->has('data.0', fn (AssertableJson $json) =>
                        $json
                            ->has('id')
                            ->has('name')
                            ->where('completed', false)
                            ->has('created_at')
                            ->has('updated_at')));
    }

    public function test_view_single_task()
    {
        $this->seed(TaskSeeder::class);

        $task = Task::first();

        $response = $this->getJson('/api/tasks/' . $task->id);

        $response
            ->assertStatus(200)
            ->assertJson(fn (AssertableJson $json) =>
                $json
                    ->has('data.id')
                    ->has('data.name')
                    ->where('data.completed', false)
                    ->has('data.created_at')
                    ->has('data.updated_at'));
    }

    public function test_view_single_task_that_does_not_exist()
    {
        $response = $this->getJson('/api/tasks/1');

        $response->assertStatus(404);
    }

    public function test_update_a_single_task()
    {
        $this->seed(TaskSeeder::class);

        $task = Task::first();

        $response = $this->putJson('/api/tasks/' . $task->id, [
            'name' => 'Updated Name',
            'completed' => true
        ]);

        $response
            ->assertStatus(200)
            ->assertJson(fn (AssertableJson $json) =>
                $json
                    ->has('data.id')
                    ->where('data.name', 'Updated Name')
                    ->where('data.completed', true)
                    ->has('data.created_at')
                    ->has('data.updated_at'));
    }

    public function test_update_task_that_does_not_exist()
    {
        $response = $this->putJson('/api/tasks/1', [
            'name' => 'Updated Name',
            'completed' => true
        ]);

        $response->assertStatus(404);
    }
}
