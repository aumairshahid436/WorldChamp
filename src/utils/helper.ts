/* all helper methods will define here */
import { toast } from "react-toastify";


/* Helper method to show tost notification */
export const ErrorNotification = (message: string) => {
    if (!toast.isActive(message)) {
        toast.error(message, { toastId: message });
    }
};

export const SuccessNotification = (message: string) => {
    if (!toast.isActive(message)) {
        toast.success(message, { toastId: message });
    }
};
export const WarnNotification = (message: string) => {
    if (!toast.isActive(message)) {
        toast.warn(message, { toastId: message });
    }
};

export const GetTotalPages = (totalItems: number, pageSize: number) => Math.ceil(totalItems / pageSize);
export const GetOffSet = (page: number, pageSize: number) => (page === 1 ? 0 : page - 1) * pageSize;
export const DeepCopy = (val: any) => JSON.parse(JSON.stringify(val));