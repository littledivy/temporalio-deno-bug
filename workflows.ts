// workflows.ts
import * as workflow from '@temporalio/workflow';
import type * as activities from './activities.ts';

const { greet } = workflow.proxyActivities<typeof activities>({
  startToCloseTimeout: '1 minute',
});

export async function example(name: string): Promise<string> {
  return await greet(name);
}
