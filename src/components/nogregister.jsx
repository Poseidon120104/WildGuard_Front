// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { useForm } from "react-hook-form";
// import { TbSocial } from "react-icons/tb";
// import { BsShare } from "react-icons/bs";
// import { AiOutlineInteraction } from "react-icons/ai";
// import { ImConnection } from "react-icons/im";
// // import { CustomButton, Loading, TextInput } from "../ngo";
// import CustomButton from "./ngo/CustomButton";
// import Loading from "./ngo/Loading";
// import TextInput from "./ngo/TextInput";
// import { BgImage } from "./assets";
// import { apiRequest } from "./utils/index.js";

// const NgoRegister = () => {
  
//   const [errMsg, setErrMsg] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const dispatch = useDispatch();
//   const {
//     register,
//     handleSubmit,
//     getValues,
//     formState: { errors },
//   } = useForm({
//     mode: "onChange",
//   });

//   const onSubmit = async (data) => {
//     setIsSubmitting(true);
//     try {
//       const res = await apiRequest({
//         url: "/auth/register",
//         data: data,
//         method: "POST",
//       });
  
//       if (res?.status === "failed") {
//         setErrMsg(res.message || "Registration failed");
//       } else {
//         setErrMsg("Registration successful, redirecting...");
//         setTimeout(() => {
//           window.location.replace("/ngologin");
//         }, 5000);
//       }
//     } catch (error) {
//       console.error("Error in onSubmit:", {
//         message: error.message,
//         details: error,
//       });
//       setErrMsg("An unexpected error occurred: " + error.message);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };
  
  
  

//   return (
//     <div className='bg-bgColor w-full h-[100vh] flex items-center justify-center p-6'>
//       <div className='w-full md:w-2/3 h-fit lg:h-full 2xl:h-5/6 py-8 lg:py-0 flex flex-row-reverse bg-primary rounded-xl overflow-hidden shadow-xl'>
//         {/* LEFT */}
//         <div className='w-full lg:w-1/2 h-full p-10 2xl:px-20 flex flex-col justify-center '>
//           <div className='w-full flex gap-2 items-center mb-6'>
//             <div className='p-2 bg-[#065ad8] rounded text-white'>
//               <TbSocial />
//             </div>
//             <span className='text-2xl text-[#065ad8] font-semibold'>
//               ShareFun
//             </span>
//           </div>

//           <p className='text-ascent-1 text-base font-semibold'>
//             Create your account
//           </p>

//           <form
//             className='py-8 flex flex-col gap-5'
//             onSubmit={handleSubmit(onSubmit)}
//           >
//             <div className='w-full flex flex-col lg:flex-row gap-1 md:gap-2'>
//               <TextInput
//                 name='firstName'
//                 label='First Name'
//                 placeholder='First Name'
//                 type='text'
//                 styles='w-full'
//                 register={register("firstName", {
//                   required: "First Name is required!",
//                 })}
//                 error={errors.firstName ? errors.firstName?.message : ""}
//               />

//               <TextInput
//                 label='Last Name'
//                 placeholder='Last Name'
//                 type='text'
//                 styles='w-full'
//                 register={register("lastName", {
//                   required: "Last Name do no match",
//                 })}
//                 error={errors.lastName ? errors.lastName?.message : ""}
//               />
//             </div>

//             <TextInput
//               name='email'
//               placeholder='email@example.com'
//               label='Email Address'
//               type='email'
//               register={register("email", {
//                 required: "Email Address is required",
//               })}
//               styles='w-full'
//               error={errors.email ? errors.email.message : ""}
//             />

//             <div className='w-full flex flex-col lg:flex-row gap-1 md:gap-2'>
//               <TextInput
//                 name='password'
//                 label='Password'
//                 placeholder='Password'
//                 type='password'
//                 styles='w-full'
//                 register={register("password", {
//                   required: "Password is required!",
//                 })}
//                 error={errors.password ? errors.password?.message : ""}
//               />

//               <TextInput
//                 label='Confirm Password'
//                 placeholder='Password'
//                 type='password'
//                 styles='w-full'
//                 register={register("cPassword", {
//                   validate: (value) => {
//                     const { password } = getValues();

//                     if (password != value) {
//                       return "Passwords do no match";
//                     }
//                   },
//                 })}
//                 error={
//                   errors.cPassword && errors.cPassword.type === "validate"
//                     ? errors.cPassword?.message
//                     : ""
//                 }
//               />
//             </div>

//             {errMsg?.message && (
//               <span
//                 className={`text-sm ${
//                   errMsg?.status == "failed"
//                     ? "text-[#f64949fe]"
//                     : "text-[#2ba150fe]"
//                 } mt-0.5`}
//               >
//                 {errMsg?.message}
//               </span>
//             )}

//             {isSubmitting ? (
//               <Loading />
//             ) : (
//               <CustomButton
//                 type='submit'
//                 containerStyles={`inline-flex justify-center rounded-md bg-blue px-8 py-3 text-sm font-medium text-white outline-none`}
//                 title='Create Account'
//               />
//             )}
//           </form>

//           <p className='text-ascent-2 text-sm text-center'>
//             Already has an account?{" "}
//             <Link
//               to='/ngologin'
//               className='text-[#065ad8] font-semibold ml-2 cursor-pointer'
//             >
//               Login
//             </Link>
//           </p>
//         </div>
//         {/* RIGHT */}
//         <div className='hidden w-1/2 h-full lg:flex flex-col items-center justify-center bg-blue'>
//           <div className='relative w-full flex items-center justify-center'>
//             <img
//               src={BgImage}
//               alt='Bg Image'
//               className='w-48 2xl:w-64 h-48 2xl:h-64 rounded-full object-cover'
//             />

//             <div className='absolute flex items-center gap-1 bg-white right-10 top-10 py-2 px-5 rounded-full'>
//               <BsShare size={14} />
//               <span className='text-xs font-medium'>Share</span>
//             </div>

//             <div className='absolute flex items-center gap-1 bg-white left-10 top-6 py-2 px-5 rounded-full'>
//               <ImConnection />
//               <span className='text-xs font-medium'>Connect</span>
//             </div>

//             <div className='absolute flex items-center gap-1 bg-white left-12 bottom-6 py-2 px-5 rounded-full'>
//               <AiOutlineInteraction />
//               <span className='text-xs font-medium'>Interact</span>
//             </div>
//           </div>

//           <div className='mt-16 text-center'>
//             <p className='text-white text-base'>
//               Connect with friedns & have share for fun
//             </p>
//             <span className='text-sm text-white/80'>
//               Share memories with friends and the world.
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NgoRegister;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { TbSocial } from "react-icons/tb";
import { BsShare } from "react-icons/bs";
import { AiOutlineInteraction } from "react-icons/ai";
import { ImConnection } from "react-icons/im";
// import { CustomButton, Loading, TextInput } from "../ngo";
import CustomButton from "./ngo/CustomButton";
import Loading from "./ngo/Loading";
import TextInput from "./ngo/TextInput";
import { BgImage } from "./assets";
import { apiRequest } from "./utils/index.js";

const NgoRegister = () => {
  
  const [errMsg, setErrMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const res=await apiRequest({
        url: "/auth/register",
        data: data,
        method: "POST",
      });
      console.log(res);
      if(res?.status==="failed"){
        setErrMsg(res);

      }else{
        setErrMsg(res);
        setTimeout(()=>{
          window.location.replace("/ngologin");
        },5000);
      }
      setIsSubmitting(false);
    } catch (error) {
      console.log(error);
      setIsSubmitting(false);
    }
  };


  return (
    <div className='bg-bgColor w-full h-[130vh] flex items-center justify-center p-6'>
      <div className='w-full md:w-3/3 h-fit lg:h-full 2xl:h-5/6 py-8 lg:py-0 flex flex-row-reverse bg-[#70ac54] rounded-xl overflow-hidden shadow-xl'>
        {/* LEFT */}
        <div className='w-full lg:w-1/2 h-full p-10 2xl:px-20 flex flex-col justify-center '>
          <div className='w-full flex gap-2 items-center mb-6'>
            <div className='p-2 bg-[#104D3E] rounded text-white'>
              <TbSocial />
            </div>
            <span className='text-2xl text-[#104D3E] font-semibold'>
            WildMedia360
            </span>
          </div>

          <p className='text-ascent-1 text-base font-semibold'>
            Create your account
          </p>

          <form
            className='py-8 flex flex-col gap-5'
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className='w-full flex flex-col lg:flex-row gap-1 md:gap-2'>
              <TextInput
                name='firstName'
                label='First Name'
                placeholder='First Name'
                type='text'
                styles='w-full'
                register={register("firstName", {
                  required: "First Name is required!",
                })}
                error={errors.firstName ? errors.firstName?.message : ""}
              />

              <TextInput
                label='Last Name'
                placeholder='Last Name'
                type='text'
                styles='w-full'
                register={register("lastName", {
                  required: "Last Name do no match",
                })}
                error={errors.lastName ? errors.lastName?.message : ""}
              />
            </div>

            <TextInput
              name='email'
              placeholder='email@example.com'
              label='Email Address'
              type='email'
              register={register("email", {
                required: "Email Address is required",
              })}
              styles='w-full'
              error={errors.email ? errors.email.message : ""}
            />

            <div className='w-full flex flex-col lg:flex-row gap-1 md:gap-2'>
              <TextInput
                name='password'
                label='Password'
                placeholder='Password'
                type='password'
                styles='w-full'
                register={register("password", {
                  required: "Password is required!",
                })}
                error={errors.password ? errors.password?.message : ""}
              />

              <TextInput
                label='Confirm Password'
                placeholder='Password'
                type='password'
                styles='w-full'
                register={register("cPassword", {
                  validate: (value) => {
                    const { password } = getValues();

                    if (password != value) {
                      return "Passwords do no match";
                    }
                  },
                })}
                error={
                  errors.cPassword && errors.cPassword.type === "validate"
                    ? errors.cPassword?.message
                    : ""
                }
              />
            </div>

            {errMsg?.message && (
              <span
                className={`text-sm ${
                  errMsg?.status == "failed"
                    ? "text-[#f64949fe]"
                    : "text-[#2ba150fe]"
                } mt-0.5`}
              >
                {errMsg?.message}
              </span>
            )}

            {isSubmitting ? (
              <Loading />
            ) : (
              <CustomButton
                type='submit'
                containerStyles={`inline-flex justify-center rounded-md bg-[#20570E] px-8 py-3 text-sm font-medium text-white outline-none`}
                title='Create Account'
              />
            )}
          </form>

          <p className='text-ascent-2 text-sm text-center'>
            Already has an account?{" "}
            <Link
              to='/ngologin'
              className='text-[#065ad8] font-semibold ml-2 cursor-pointer bg-red-500'
            >
              Login
            </Link>
          </p>
        </div>
        {/* RIGHT */}
        <div className='hidden w-1/2 h-full lg:flex flex-col items-center justify-center bg-blue'>
          <div className='relative w-full flex items-center justify-center'>
            <img
              src={BgImage}
              alt='Bg Image'
              className='w-48 2xl:w-64 h-48 2xl:h-64 rounded-full object-cover'
            />

            <div className='absolute flex items-center gap-1 bg-white right-10 top-10 py-2 px-5 rounded-full'>
              <BsShare size={14} />
              <span className='text-xs font-medium'>Share</span>
            </div>

            <div className='absolute flex items-center gap-1 bg-white left-10 top-6 py-2 px-5 rounded-full'>
              <ImConnection />
              <span className='text-xs font-medium'>Connect</span>
            </div>

            <div className='absolute flex items-center gap-1 bg-white left-12 bottom-6 py-2 px-5 rounded-full'>
              <AiOutlineInteraction />
              <span className='text-xs font-medium'>Interact</span>
            </div>
          </div>

          <div className='mt-16 text-center'>
            <p className='text-white text-base'>
              Connect with friedns & have share for fun
            </p>
            <span className='text-sm text-white/80'>
              Share memories with friends and the world.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NgoRegister;