'use client';
import axios from "@/app/provider/api.provider";
import { useMutation, useQuery } from "@tanstack/react-query";

const getAuthID = () => {
    const auth = localStorage.getItem('auth');
    const parseAuth = JSON.parse(auth);
    return parseAuth.userData.id;
}

export default function Profile() {
    return (
        <div>

        </div>
    )
}