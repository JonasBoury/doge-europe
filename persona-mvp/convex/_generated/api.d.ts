/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type * as assignments from "../assignments.js";
import type * as auditLog from "../auditLog.js";
import type * as dashboard from "../dashboard.js";
import type * as institutions from "../institutions.js";
import type * as personnel from "../personnel.js";
import type * as salaryScales from "../salaryScales.js";
import type * as seed from "../seed.js";
import type * as serviceInterruptions from "../serviceInterruptions.js";

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";

declare const fullApi: ApiFromModules<{
  assignments: typeof assignments;
  auditLog: typeof auditLog;
  dashboard: typeof dashboard;
  institutions: typeof institutions;
  personnel: typeof personnel;
  salaryScales: typeof salaryScales;
  seed: typeof seed;
  serviceInterruptions: typeof serviceInterruptions;
}>;

/**
 * A utility for referencing Convex functions in your app's public API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
export declare const api: FilterApi<
  typeof fullApi,
  FunctionReference<any, "public">
>;

/**
 * A utility for referencing Convex functions in your app's internal API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = internal.myModule.myFunction;
 * ```
 */
export declare const internal: FilterApi<
  typeof fullApi,
  FunctionReference<any, "internal">
>;

export declare const components: {};
