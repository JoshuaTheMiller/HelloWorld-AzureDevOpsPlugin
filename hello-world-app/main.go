package main

import (
	"fmt"
	"os"
)

const pluginRepo = "https://github.com/JoshuaTheMiller/HelloWorld-AzureDevOpsPlugin"

func getHelloWorldMessage() string {
	var value, found = os.LookupEnv("HELLO_WORLD_AZURE_DEVOPS_TASK_MESSAGE")

	if !found {
		return "Good job at running this app! Find more info at the following URL: " + pluginRepo
	}

	return value
}

func main() {
	var message = getHelloWorldMessage()

	fmt.Print(message)
}
