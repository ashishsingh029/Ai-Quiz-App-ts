import { toast } from "react-hot-toast";

const useImplementedLater = () => {
    toast.loading("Will be implemented later on..", {
        duration: 1500, // shown for 1500 ms
    });
}
export default useImplementedLater;