import { Upload } from "react-feather";
import { Submit } from "./Submit";
import { uploadFIle } from "~/lib/upload.action";

export const UploadDoc = ({ broker }: { broker: string }) => {
  return (
    <form action={uploadFIle} className="flex gap-2">
      <input
        type="file"
        name="file"
        className="file-input file-input-bordered file-input-primary w-full max-w-xs"
      />
      <input value={broker} type="text" name="brokerName" className="hidden" />

      <Submit>
        <Upload size={20} />
        Upload
      </Submit>
    </form>
  );
};
