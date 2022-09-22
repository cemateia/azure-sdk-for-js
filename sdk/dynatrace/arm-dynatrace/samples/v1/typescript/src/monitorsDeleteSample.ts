/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { DynatraceObservability } from "@azure/arm-dynatrace";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Delete a MonitorResource
 *
 * @summary Delete a MonitorResource
 * x-ms-original-file: specification/dynatrace/resource-manager/Dynatrace.Observability/stable/2021-09-01/examples/Monitors_Delete_MaximumSet_Gen.json
 */
async function monitorsDeleteMaximumSetGen() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = "myResourceGroup";
  const monitorName = "myMonitor";
  const credential = new DefaultAzureCredential();
  const client = new DynatraceObservability(credential, subscriptionId);
  const result = await client.monitors.beginDeleteAndWait(
    resourceGroupName,
    monitorName
  );
  console.log(result);
}

monitorsDeleteMaximumSetGen().catch(console.error);

/**
 * This sample demonstrates how to Delete a MonitorResource
 *
 * @summary Delete a MonitorResource
 * x-ms-original-file: specification/dynatrace/resource-manager/Dynatrace.Observability/stable/2021-09-01/examples/Monitors_Delete_MinimumSet_Gen.json
 */
async function monitorsDeleteMinimumSetGen() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = "myResourceGroup";
  const monitorName = "myMonitor";
  const credential = new DefaultAzureCredential();
  const client = new DynatraceObservability(credential, subscriptionId);
  const result = await client.monitors.beginDeleteAndWait(
    resourceGroupName,
    monitorName
  );
  console.log(result);
}

monitorsDeleteMinimumSetGen().catch(console.error);