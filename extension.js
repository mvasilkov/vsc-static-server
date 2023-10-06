'use strict'

const vscode = require('vscode')

/** This function is called when the extension is activated.
 * @param {vscode.ExtensionContext} context */
function activate(context) {
	const startServer = vscode.commands.registerCommand('vsc-static-server.startServer', function () {
		vscode.window.showInformationMessage('START')
	})
	context.subscriptions.push(startServer)

	const stopServer = vscode.commands.registerCommand('vsc-static-server.stopServer', function () {
		vscode.window.showInformationMessage('STOP')
	})
	context.subscriptions.push(stopServer)
}

/** This function is called when the extension is deactivated. */
function deactivate() {
}

module.exports = {
	activate,
	deactivate,
}
