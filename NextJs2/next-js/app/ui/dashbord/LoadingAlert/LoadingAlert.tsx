"use client";
import { useEffect } from "react";
import Swal from "sweetalert2";

export default function LoadingAlert() {
  useEffect(() => {
    Swal.fire({
      title: "The Internet?",
      text: "That thing is still around?",
      icon: "question",
    });
  }, []);

  return <p>Loading...</p>; // Text shown while the alert is displayed
}
