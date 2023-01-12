/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { Quota, QuotasListOptionalParams } from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Quotas. */
export interface Quotas {
  /**
   * List quotas for the given workspace.
   * @param options The options parameters.
   */
  list(options?: QuotasListOptionalParams): PagedAsyncIterableIterator<Quota>;
}