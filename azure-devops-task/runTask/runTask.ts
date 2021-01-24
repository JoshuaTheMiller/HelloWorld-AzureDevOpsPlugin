import tl = require("azure-pipelines-task-lib/task");

export class RunHelloWorldAppTask {
    public static AppIsInstalled() {
        return !!tl.which("hello-world-app", false);
    }

    public RunMain() {
        tl.execSync("hello-world-app", []);
    }
}

if (!RunHelloWorldAppTask.AppIsInstalled()) {
    tl.setResult(tl.TaskResult.Failed, "Hello-World-App not found on path! Try running the Installer task first.");
}

const task = new RunHelloWorldAppTask();
task.RunMain();