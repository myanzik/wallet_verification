import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

const SuspensewithSearchParams = ({ children }: { children: any }) => {
  const params = useSearchParams();
  const encryptedData = params.get("encrypted");

  return children(encryptedData);
};

export default SuspensewithSearchParams;
