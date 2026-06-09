const vscode = require('vscode');

function activate(context) {
  const config = vscode.workspace.getConfiguration('claudeCodeOnStartup');
  const behavior = config.get('startupBehavior', 'openLast');
  const command = behavior === 'openNew'
    ? 'claude-vscode.editor.open'
    : 'claude-vscode.editor.openLast';
  vscode.commands.executeCommand(command);
}

function deactivate() {}

module.exports = { activate, deactivate };
