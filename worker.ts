// worker.ts
import { Worker } from 'npm:@temporalio/worker';
import * as activities from './activities.ts';

async function run() {
    const worker = await Worker.create({
        workflowsPath: '/home/divy/temporalio-deno-bug/workflows.ts',  // < THIS NEEDS TO BE YOUR EXACT PATH
        // temporal docs say to use require.resolve('./workflows'), but this doesnt work in deno, i would love to know how to do this in deno. 
        taskQueue: 'hello-world',
        activities,
    });

    await worker.run();
}

run();


