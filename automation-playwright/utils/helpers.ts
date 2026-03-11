export async function safeStep(stepName: string, action: () => Promise<void>): Promise<void> {
  try {
    await action();
  } catch (error) {
    throw new Error(`[${stepName}] failed: ${String(error)}`);
  }
}
