import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetAllUsers = () => {
    return useQuery({
        queryKey: ["get","all",'users'],
        queryFn: async () => {
            const res = await axios.get("https://jsonplaceholder.typicode.com/users");

            return res.data;
        },
        enabled: true,
    });
};
