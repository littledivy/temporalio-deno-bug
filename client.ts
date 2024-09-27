// client.ts
import { Connection, Client } from 'npm:@temporalio/client';
import { example } from './workflows.ts';

async function run() {
    const connection = await Connection.connect({ address: 'localhost:7233' });

    const client = new Client({
      connection,
    });
    
    await client.workflow.start(example, {
        taskQueue: 'hello-world',
        args: ['Temporal'],
        workflowId: 'workflow-1',
    });
}
  
run()
