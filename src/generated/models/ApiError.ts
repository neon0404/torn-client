import type {
  ErrorAccessLevelTooLow,
  ErrorApiDisabled,
  ErrorApiKeyPaused,
  ErrorBackendError,
  ErrorCategorySelectionUnavailableForInteractionLogs,
  ErrorClosedTemporarily,
  ErrorDailyReadLimitReached,
  ErrorIncorrectCategory,
  ErrorIncorrectId,
  ErrorIncorrectIdEntityRelation,
  ErrorIncorrectKey,
  ErrorIncorrectLogId,
  ErrorInvalidStatRequested,
  ErrorIpBlocked,
  ErrorKeyChangeCooldown,
  ErrorKeyEmpty,
  ErrorKeyOwnerInFederalJail,
  ErrorKeyReadError,
  ErrorKeyTemporaryDisabled,
  ErrorLogUnavailable,
  ErrorMustMigrateToCrimesV2,
  ErrorMustMigrateToOrganizedCrimesV2,
  ErrorOnlyAvailableInApiV1,
  ErrorOnlyAvailableInApiV2,
  ErrorOnlyCategoryOrStatsAllowed,
  ErrorRaceNotFinished,
  ErrorTooManyRequests,
  ErrorUnknown,
  ErrorWrongFields,
  ErrorWrongType,
} from ".";

/** @category Models */
export type ApiError =
  | ErrorUnknown
  | ErrorKeyEmpty
  | ErrorIncorrectKey
  | ErrorWrongType
  | ErrorWrongFields
  | ErrorTooManyRequests
  | ErrorIncorrectId
  | ErrorIncorrectIdEntityRelation
  | ErrorIpBlocked
  | ErrorApiDisabled
  | ErrorKeyOwnerInFederalJail
  | ErrorKeyChangeCooldown
  | ErrorKeyReadError
  | ErrorKeyTemporaryDisabled
  | ErrorDailyReadLimitReached
  | ErrorLogUnavailable
  | ErrorAccessLevelTooLow
  | ErrorBackendError
  | ErrorApiKeyPaused
  | ErrorMustMigrateToCrimesV2
  | ErrorRaceNotFinished
  | ErrorIncorrectCategory
  | ErrorOnlyAvailableInApiV1
  | ErrorOnlyAvailableInApiV2
  | ErrorClosedTemporarily
  | ErrorInvalidStatRequested
  | ErrorOnlyCategoryOrStatsAllowed
  | ErrorMustMigrateToOrganizedCrimesV2
  | ErrorIncorrectLogId
  | ErrorCategorySelectionUnavailableForInteractionLogs;
