import { writeFile } from "node:fs/promises";

import { METADATA_FILE, HASHES_FILE } from "./constants";
import { getFilenameForSubmission } from "./getFilenameForSubmission";
import { getDirnameForSubmission } from "./getDirnameForSubmission";
import type { TransformedSubmission } from "./transformSubmission";

export async function writeSubmissionsMetadataAndHashes(
  submissionsMap: ReadonlyMap<string, TransformedSubmission>,
): Promise<void> {
  const submissions = [...submissionsMap.values()].sort(
    (a, b) => a.timestamp - b.timestamp,
  );

  await Promise.all([
    writeFile(
      METADATA_FILE,
      submissions
        .map((submission) => JSON.stringify(submission) + "\n")
        .join(""),
      { encoding: "utf8" },
    ),

    writeFile(
      HASHES_FILE,
      submissions
        .map(
          (submission) =>
            // Two spaces intentional, see `shasum` manual.
            `${submission.sha512}  ${getDirnameForSubmission(
              submission,
            )}/${getFilenameForSubmission(submission)}\n`,
        )
        .join(""),
      { encoding: "utf8" },
    ),
  ]);
}
