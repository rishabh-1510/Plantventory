"use client"
import { useAuthModal } from "@/app/store/useAuthModalStore";
import Modal from "./Modal";

const LoginModal = () => {
 const {openRegister , isLoginOpen ,closeLogin} = useAuthModal();
   return (
     <Modal title="Login" onClose={closeLogin} isOpen={isLoginOpen}>
         <p>
             Login Modal
         </p>
     </Modal>
   )
}

export default LoginModal