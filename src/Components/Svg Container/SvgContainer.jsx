/* eslint-disable react/prop-types */
export function SearchSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M17.9419 17.0575L14.0302 13.1466C15.1639 11.7854 15.7293 10.0395 15.6086 8.27214C15.488 6.50475 14.6906 4.85192 13.3823 3.65748C12.074 2.46304 10.3557 1.81895 8.58462 1.8592C6.81357 1.89945 5.12622 2.62094 3.87358 3.87358C2.62094 5.12622 1.89945 6.81357 1.8592 8.58462C1.81895 10.3557 2.46304 12.074 3.65748 13.3823C4.85192 14.6906 6.50475 15.488 8.27214 15.6086C10.0395 15.7293 11.7854 15.1639 13.1466 14.0302L17.0575 17.9419C17.1156 17.9999 17.1845 18.046 17.2604 18.0774C17.3363 18.1089 17.4176 18.125 17.4997 18.125C17.5818 18.125 17.6631 18.1089 17.739 18.0774C17.8149 18.046 17.8838 17.9999 17.9419 17.9419C17.9999 17.8838 18.046 17.8149 18.0774 17.739C18.1089 17.6631 18.125 17.5818 18.125 17.4997C18.125 17.4176 18.1089 17.3363 18.0774 17.2604C18.046 17.1845 17.9999 17.1156 17.9419 17.0575ZM3.12469 8.74969C3.12469 7.63717 3.45459 6.54963 4.07267 5.62461C4.69076 4.69958 5.56926 3.97861 6.5971 3.55287C7.62493 3.12712 8.75593 3.01573 9.84707 3.23277C10.9382 3.44981 11.9405 3.98554 12.7272 4.77221C13.5138 5.55888 14.0496 6.56116 14.2666 7.65231C14.4837 8.74345 14.3723 9.87445 13.9465 10.9023C13.5208 11.9301 12.7998 12.8086 11.8748 13.4267C10.9497 14.0448 9.86221 14.3747 8.74969 14.3747C7.25836 14.373 5.82858 13.7799 4.77404 12.7253C3.71951 11.6708 3.12634 10.241 3.12469 8.74969Z"
        fill="#808080"
      />
    </svg>
  );
}
export function DownArrowSvg({ dark }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M13.354 6.35403L8.35403 11.354C8.30759 11.4005 8.25245 11.4374 8.19175 11.4626C8.13105 11.4877 8.06599 11.5007 8.00028 11.5007C7.93457 11.5007 7.86951 11.4877 7.80881 11.4626C7.74811 11.4374 7.69296 11.4005 7.64653 11.354L2.64653 6.35403C2.55271 6.26021 2.5 6.13296 2.5 6.00028C2.5 5.8676 2.55271 5.74035 2.64653 5.64653C2.74035 5.55271 2.8676 5.5 3.00028 5.5C3.13296 5.5 3.26021 5.55271 3.35403 5.64653L8.00028 10.2934L12.6465 5.64653C12.693 5.60007 12.7481 5.56322 12.8088 5.53808C12.8695 5.51294 12.9346 5.5 13.0003 5.5C13.066 5.5 13.131 5.51294 13.1917 5.53808C13.2524 5.56322 13.3076 5.60007 13.354 5.64653C13.4005 5.69298 13.4373 5.74813 13.4625 5.80883C13.4876 5.86953 13.5006 5.93458 13.5006 6.00028C13.5006 6.06598 13.4876 6.13103 13.4625 6.19173C13.4373 6.25242 13.4005 6.30757 13.354 6.35403Z"
        // fill="white"
        fill={dark ? 'black' : 'white'}
      />
    </svg>
  );
}
export function PersonSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M21.6484 19.8746C20.2206 17.4062 18.0203 15.6362 15.4525 14.7971C16.7226 14.041 17.7094 12.8888 18.2614 11.5176C18.8134 10.1463 18.8999 8.63175 18.5078 7.20652C18.1157 5.78129 17.2666 4.52418 16.0909 3.62824C14.9151 2.7323 13.4778 2.24707 11.9996 2.24707C10.5215 2.24707 9.08414 2.7323 7.90842 3.62824C6.73269 4.52418 5.88358 5.78129 5.49146 7.20652C5.09935 8.63175 5.18592 10.1463 5.73788 11.5176C6.28984 12.8888 7.27668 14.041 8.54683 14.7971C5.97902 15.6352 3.77871 17.4052 2.35089 19.8746C2.29853 19.96 2.2638 20.055 2.24875 20.154C2.2337 20.253 2.23863 20.3541 2.26326 20.4511C2.28789 20.5482 2.33171 20.6394 2.39214 20.7192C2.45257 20.7991 2.52838 20.8661 2.6151 20.9162C2.70183 20.9663 2.79771 20.9985 2.89709 21.0109C2.99647 21.0234 3.09733 21.0158 3.19373 20.9886C3.29012 20.9614 3.3801 20.9152 3.45835 20.8527C3.5366 20.7902 3.60154 20.7126 3.64933 20.6246C5.41558 17.5721 8.53746 15.7496 11.9996 15.7496C15.4618 15.7496 18.5837 17.5721 20.35 20.6246C20.3977 20.7126 20.4627 20.7902 20.5409 20.8527C20.6192 20.9152 20.7092 20.9614 20.8056 20.9886C20.902 21.0158 21.0028 21.0234 21.1022 21.0109C21.2016 20.9985 21.2975 20.9663 21.3842 20.9162C21.4709 20.8661 21.5467 20.7991 21.6072 20.7192C21.6676 20.6394 21.7114 20.5482 21.736 20.4511C21.7607 20.3541 21.7656 20.253 21.7505 20.154C21.7355 20.055 21.7008 19.96 21.6484 19.8746ZM6.74964 8.99962C6.74964 7.96127 7.05755 6.94624 7.63443 6.08288C8.21131 5.21952 9.03124 4.54661 9.99056 4.14925C10.9499 3.75189 12.0055 3.64793 13.0239 3.8505C14.0423 4.05307 14.9777 4.55308 15.712 5.28731C16.4462 6.02154 16.9462 6.957 17.1488 7.9754C17.3513 8.9938 17.2474 10.0494 16.85 11.0087C16.4527 11.968 15.7797 12.788 14.9164 13.3648C14.053 13.9417 13.038 14.2496 11.9996 14.2496C10.6077 14.2481 9.27322 13.6945 8.28898 12.7103C7.30473 11.726 6.75113 10.3916 6.74964 8.99962Z"
        fill="white"
      />
    </svg>
  );
}
export function CartSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M9.75 20.25C9.75 20.5467 9.66203 20.8367 9.4972 21.0834C9.33238 21.33 9.09811 21.5223 8.82403 21.6358C8.54994 21.7494 8.24834 21.7791 7.95736 21.7212C7.66639 21.6633 7.39912 21.5204 7.18934 21.3107C6.97956 21.1009 6.8367 20.8336 6.77882 20.5426C6.72094 20.2517 6.75065 19.9501 6.86418 19.676C6.97771 19.4019 7.16997 19.1676 7.41665 19.0028C7.66332 18.838 7.95333 18.75 8.25 18.75C8.64782 18.75 9.02936 18.908 9.31066 19.1893C9.59196 19.4706 9.75 19.8522 9.75 20.25ZM18 18.75C17.7033 18.75 17.4133 18.838 17.1666 19.0028C16.92 19.1676 16.7277 19.4019 16.6142 19.676C16.5006 19.9501 16.4709 20.2517 16.5288 20.5426C16.5867 20.8336 16.7296 21.1009 16.9393 21.3107C17.1491 21.5204 17.4164 21.6633 17.7074 21.7212C17.9983 21.7791 18.2999 21.7494 18.574 21.6358C18.8481 21.5223 19.0824 21.33 19.2472 21.0834C19.412 20.8367 19.5 20.5467 19.5 20.25C19.5 19.8522 19.342 19.4706 19.0607 19.1893C18.7794 18.908 18.3978 18.75 18 18.75ZM22.4728 6.95062L20.0691 15.6019C19.9369 16.0745 19.6542 16.4911 19.2639 16.7885C18.8736 17.0859 18.397 17.2479 17.9062 17.25H8.64C8.14784 17.2498 7.66926 17.0886 7.27725 16.791C6.88523 16.4935 6.6013 16.0758 6.46875 15.6019L3.18 3.75H1.5C1.30109 3.75 1.11032 3.67098 0.96967 3.53033C0.829018 3.38968 0.75 3.19891 0.75 3C0.75 2.80109 0.829018 2.61032 0.96967 2.46967C1.11032 2.32902 1.30109 2.25 1.5 2.25H3.75C3.91397 2.24997 4.07343 2.30367 4.20398 2.40289C4.33452 2.50211 4.42895 2.64138 4.47281 2.79938L5.36156 6H21.75C21.8656 5.99998 21.9797 6.02669 22.0833 6.07805C22.1869 6.1294 22.2772 6.20401 22.3472 6.29605C22.4171 6.38809 22.4649 6.49506 22.4867 6.60861C22.5085 6.72216 22.5037 6.83922 22.4728 6.95062ZM20.7628 7.5H5.77875L7.91719 15.2006C7.96105 15.3586 8.05548 15.4979 8.18602 15.5971C8.31657 15.6963 8.47603 15.75 8.64 15.75H17.9062C18.0702 15.75 18.2297 15.6963 18.3602 15.5971C18.4908 15.4979 18.5852 15.3586 18.6291 15.2006L20.7628 7.5Z"
        fill="white"
      />
    </svg>
  );
}
export function HamburgerSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="13"
      viewBox="0 0 16 13"
      fill="none"
    >
      <path
        d="M15.3333 7.16667H0.666667C0.298667 7.16667 0 6.868 0 6.5C0 6.132 0.298667 5.83333 0.666667 5.83333H15.3333C15.7013 5.83333 16 6.132 16 6.5C16 6.868 15.7013 7.16667 15.3333 7.16667ZM15.3333 2.0555H0.666667C0.298667 2.0555 0 1.75683 0 1.38883C0 1.02083 0.298667 0.722168 0.666667 0.722168H15.3333C15.7013 0.722168 16 1.02083 16 1.38883C16 1.75683 15.7013 2.0555 15.3333 2.0555ZM15.3333 12.2777H0.666667C0.298667 12.2777 0 11.979 0 11.611C0 11.243 0.298667 10.9443 0.666667 10.9443H15.3333C15.7013 10.9443 16 11.243 16 11.611C16 11.979 15.7013 12.2777 15.3333 12.2777Z"
        fill="#191919"
      />
    </svg>
  );
}
export function StartSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="128"
      height="136"
      viewBox="0 0 128 136"
      fill="none"
    >
      <path
        d="M62.6316 2.26869C63.1617 1.08785 64.8383 1.08785 65.3684 2.26869L75.8348 25.581C76.4401 26.9292 78.0766 27.4609 79.3587 26.7259L101.529 14.0179C102.652 13.3742 104.008 14.3596 103.743 15.6266L98.5078 40.6386C98.2051 42.0851 99.2165 43.4772 100.686 43.6362L126.091 46.3865C127.378 46.5258 127.896 48.1202 126.937 48.9893L108 66.1474C106.905 67.1397 106.905 68.8603 108 69.8526L126.937 87.0107C127.896 87.8798 127.378 89.4742 126.091 89.6135L100.686 92.3638C99.2165 92.5228 98.2051 93.9149 98.5078 95.3614L103.743 120.373C104.008 121.64 102.652 122.626 101.529 121.982L79.3587 109.274C78.0766 108.539 76.4401 109.071 75.8348 110.419L65.3684 133.731C64.8383 134.912 63.1617 134.912 62.6316 133.731L52.1652 110.419C51.5599 109.071 49.9234 108.539 48.6413 109.274L26.4712 121.982C25.3482 122.626 23.9919 121.64 24.257 120.373L29.4922 95.3614C29.7949 93.9149 28.7835 92.5228 27.3142 92.3638L1.90867 89.6135C0.621797 89.4742 0.103724 87.8798 1.06295 87.0107L19.9999 69.8526C21.0951 68.8603 21.0951 67.1397 19.9999 66.1474L1.06294 48.9893C0.103726 48.1202 0.621795 46.5258 1.90867 46.3865L27.3142 43.6362C28.7835 43.4772 29.7949 42.0851 29.4922 40.6386L24.257 15.6266C23.9919 14.3596 25.3482 13.3742 26.4712 14.0179L48.6413 26.726C49.9234 27.4609 51.5599 26.9292 52.1652 25.581L62.6316 2.26869Z"
        fill="white"
        stroke="#FD384F"
      />
    </svg>
  );
}
export function YellowTickSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="49"
      viewBox="0 0 48 49"
      fill="none"
    >
      <path
        d="M22.1519 43.0392C22.0246 43.0392 21.8986 43.0129 21.782 42.9618C21.6653 42.9108 21.5605 42.8362 21.4741 42.7426L3.19837 22.9736C3.07654 22.8418 2.99577 22.6773 2.96595 22.5003C2.93614 22.3233 2.95856 22.1415 3.03049 21.9771C3.10241 21.8126 3.22071 21.6727 3.37091 21.5745C3.52112 21.4762 3.6967 21.4239 3.87618 21.4239H12.6731C12.8052 21.4239 12.9357 21.4523 13.0559 21.507C13.1761 21.5618 13.2832 21.6417 13.3698 21.7414L19.4777 28.7682C20.1378 27.3572 21.4156 25.0078 23.6579 22.1449C26.9729 17.9126 33.1388 11.6882 43.6881 6.06926C43.892 5.96068 44.1292 5.9325 44.3529 5.99028C44.5765 6.04807 44.7704 6.18761 44.8962 6.38137C45.022 6.57512 45.0706 6.809 45.0323 7.03682C44.9941 7.26464 44.8718 7.46984 44.6897 7.61191C44.6494 7.64338 40.582 10.8465 35.9009 16.7134C31.5927 22.1125 25.8657 30.9408 23.0477 42.3381C22.9982 42.5383 22.883 42.7162 22.7206 42.8433C22.5582 42.9705 22.3579 43.0396 22.1516 43.0396L22.1519 43.0392Z"
        fill="#F2B100"
      />
    </svg>
  );
}
export function RightArrowSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="18"
      viewBox="0 0 24 18"
      fill="none"
    >
      <g clipPath="url(#clip0_6301_107)">
        <path
          d="M15.1898 2.06738C15.1898 2.06738 19.2968 6.88069 21.9283 9.96484M21.9283 9.96484L15.6805 16.7055M21.9283 9.96484L2.25391 9.84009"
          stroke="#191919"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_6301_107">
          <rect
            width="23"
            height="18"
            fill="white"
            transform="translate(0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
export function YellowStartSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="19"
      viewBox="0 0 20 19"
      fill="none"
    >
      <path
        d="M9.04894 0.927052C9.3483 0.00574112 10.6517 0.00573993 10.9511 0.927051L12.4697 5.60081C12.6035 6.01284 12.9875 6.2918 13.4207 6.2918H18.335C19.3037 6.2918 19.7065 7.53141 18.9228 8.10081L14.947 10.9894C14.5966 11.244 14.4499 11.6954 14.5838 12.1074L16.1024 16.7812C16.4017 17.7025 15.3472 18.4686 14.5635 17.8992L10.5878 15.0106C10.2373 14.756 9.7627 14.756 9.41221 15.0106L5.43648 17.8992C4.65276 18.4686 3.59828 17.7025 3.89763 16.7812L5.41623 12.1074C5.55011 11.6954 5.40345 11.244 5.05296 10.9894L1.07722 8.10081C0.293507 7.53141 0.696283 6.2918 1.66501 6.2918H6.57929C7.01252 6.2918 7.39647 6.01284 7.53035 5.60081L9.04894 0.927052Z"
        fill="#FFAB00"
      />
    </svg>
  );
}
export function TruckSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="69"
      viewBox="0 0 100 69"
      fill="none"
    >
      <g clipPath="url(#clip0_6301_673)">
        <path
          d="M99.7417 42.0078L94.6798 34.2121C92.4447 30.7672 88.6472 28.7102 84.5192 28.7102H71.4286V21.1275C71.4286 16.4976 67.6881 12.7327 63.0887 12.7327H38.5828C37.2077 5.50395 30.8863 0.0195312 23.3096 0.0195312C14.7303 0.0195312 7.75112 7.04561 7.75112 15.6805C7.75112 21.1104 10.5132 25.9 14.6947 28.7104H1.58808C0.710566 28.7104 0.000232788 29.4254 0.000232788 30.3085C0.000232788 31.1915 0.710566 31.9065 1.58784 31.9065H17.4607V35.102H11.1107C10.9023 35.102 10.6959 35.1433 10.5033 35.2236C10.3107 35.304 10.1358 35.4217 9.98844 35.5701C9.84109 35.7185 9.72424 35.8947 9.64456 36.0886C9.56487 36.2824 9.52392 36.4902 9.52404 36.7C9.52392 36.9098 9.56488 37.1176 9.64457 37.3114C9.72427 37.5052 9.84114 37.6813 9.9885 37.8297C10.1359 37.978 10.3108 38.0956 10.5034 38.1758C10.6959 38.2561 10.9023 38.2973 11.1107 38.2972H17.4605V41.4924H1.58761C1.37912 41.4923 1.17265 41.5336 0.980005 41.6138C0.78736 41.6941 0.612317 41.8118 0.464879 41.9602C0.31744 42.1085 0.200496 42.2847 0.12073 42.4786C0.0409639 42.6725 -6.08447e-05 42.8803 2.7266e-07 43.0902C-0.000121965 43.3001 0.0408577 43.508 0.120597 43.702C0.200335 43.8959 0.31727 44.0721 0.464714 44.2206C0.612159 44.369 0.787223 44.4868 0.979897 44.567C1.17257 44.6473 1.37908 44.6886 1.58761 44.6885H17.4605V51.7647C14.6622 53.0072 12.6986 55.8174 12.6986 59.0887V60.6657C12.6986 61.0895 12.8658 61.496 13.1635 61.7956C13.4612 62.0953 13.8649 62.2637 14.2859 62.2638H28.364C29.2669 66.1731 32.7493 69.0987 36.9043 69.0987C41.0607 69.0987 44.542 66.1731 45.4448 62.2638H75.9833C76.8871 66.1731 80.3692 69.0987 84.5236 69.0987C88.6782 69.0987 92.1612 66.1731 93.0641 62.2638H98.4129C98.6213 62.2639 98.8278 62.2226 99.0203 62.1423C99.2129 62.062 99.3879 61.9442 99.5353 61.7958C99.6826 61.6474 99.7995 61.4712 99.8792 61.2773C99.9588 61.0834 99.9997 60.8756 99.9995 60.6657V42.8819C99.9996 42.5715 99.91 42.2677 99.7414 42.0078H99.7417ZM10.9256 15.6803C10.9256 8.80705 16.4814 3.2145 23.3096 3.2145C30.1388 3.2145 35.6938 8.80705 35.6938 15.6803C35.6938 22.5536 30.139 28.1461 23.3096 28.1461C16.4814 28.1461 10.9256 22.5536 10.9256 15.6803ZM20.6348 44.6885H23.8091C24.0176 44.6886 24.2241 44.6474 24.4168 44.5671C24.6095 44.4868 24.7846 44.3691 24.9321 44.2207C25.0796 44.0722 25.1965 43.896 25.2763 43.702C25.356 43.508 25.397 43.3001 25.3969 43.0902C25.397 42.8803 25.356 42.6724 25.2762 42.4785C25.1965 42.2846 25.0795 42.1083 24.932 41.9599C24.7846 41.8115 24.6095 41.6938 24.4168 41.6135C24.2241 41.5333 24.0176 41.492 23.8091 41.4921H20.6348V38.2969H31.7467C31.955 38.297 32.1614 38.2558 32.3539 38.1755C32.5465 38.0953 32.7214 37.9777 32.8687 37.8293C33.0161 37.681 33.1329 37.5049 33.2126 37.3111C33.2923 37.1173 33.3332 36.9096 33.3331 36.6998C33.3332 36.49 33.2923 36.2822 33.2126 36.0883C33.1329 35.8944 33.0161 35.7183 32.8687 35.5699C32.7214 35.4214 32.5464 35.3037 32.3538 35.2234C32.1613 35.1431 31.9549 35.1017 31.7464 35.1017H20.6348V31.9061H41.2695C42.1461 31.9061 42.8571 31.1913 42.8571 30.308C42.8571 29.4247 42.1461 28.7099 41.2695 28.7099H31.9245C36.0417 25.9425 38.7728 21.2544 38.8563 15.9279H63.0897C65.937 15.9279 68.2538 18.2609 68.2538 21.1273V51.0787H20.655C20.6487 51.0787 20.6422 51.0806 20.635 51.0806L20.6348 44.6885ZM68.2538 59.0677H45.5892C45.3395 57.2299 44.5294 55.5733 43.3331 54.2744H68.2541L68.2538 59.0677ZM20.6548 54.2744H30.4757C29.2806 55.5733 28.4694 57.2299 28.2206 59.0677H15.8729C15.8836 56.4236 18.0253 54.2744 20.6548 54.2744ZM36.9045 65.9035C33.8172 65.9035 31.3042 63.3746 31.3042 60.2662C31.3042 57.1588 33.8172 54.629 36.9045 54.629C39.9926 54.629 42.5049 57.1588 42.5049 60.2662C42.5049 63.3746 39.9926 65.9035 36.9045 65.9035ZM84.5236 65.9035C81.4365 65.9035 78.9235 63.3746 78.9235 60.2662C78.9235 57.1588 81.4365 54.629 84.5238 54.629C87.6116 54.629 90.1239 57.1588 90.1239 60.2662C90.1239 63.3746 87.6116 65.9035 84.5236 65.9035ZM96.8252 59.0677H93.2082C92.6242 54.7642 88.9567 51.4338 84.5236 51.4338C80.0902 51.4338 76.4237 54.7642 75.8387 59.0677H71.4281V31.9065H84.5192C87.57 31.9065 90.3758 33.4213 92.0231 35.9593L96.8252 43.3573V59.0677Z"
          fill="#FF6F23"
        />
        <path
          d="M87.1206 60.2671C87.1206 61.7107 85.9581 62.8809 84.5239 62.8809C83.0898 62.8809 81.9272 61.7107 81.9272 60.2671C81.9272 58.8235 83.0898 57.6532 84.5239 57.6532C85.9581 57.6532 87.1206 58.8235 87.1206 60.2671ZM39.5013 60.2671C39.5013 61.7107 38.3388 62.8809 36.9046 62.8809C35.4714 62.8809 34.3088 61.7107 34.3088 60.2671C34.3088 58.8235 35.4714 57.6532 36.9046 57.6532C38.3388 57.6532 39.5013 58.8235 39.5013 60.2671ZM25.397 15.6812V8.69089C25.3971 8.48103 25.356 8.27322 25.2762 8.07935C25.1964 7.88547 25.0795 7.70932 24.932 7.56099C24.7845 7.41265 24.6094 7.29504 24.4168 7.21486C24.2241 7.13469 24.0176 7.09354 23.8092 7.09375C23.6008 7.09363 23.3944 7.13485 23.2018 7.21507C23.0093 7.29529 22.8343 7.41293 22.6869 7.56127C22.5396 7.7096 22.4227 7.88571 22.343 8.07954C22.2633 8.27337 22.2223 8.48111 22.2225 8.69089V15.1599L18.9828 19.6335C18.8599 19.8028 18.7714 19.9949 18.7223 20.1987C18.6733 20.4025 18.6646 20.6141 18.6968 20.8213C18.729 21.0284 18.8015 21.2272 18.9101 21.4062C19.0187 21.5851 19.1613 21.7408 19.3298 21.8642C19.6007 22.0646 19.9282 22.1726 20.2645 22.1724C20.5148 22.1727 20.7616 22.1133 20.9847 21.9989C21.2077 21.8846 21.4007 21.7187 21.5477 21.5148L25.0926 16.622C25.2904 16.3487 25.397 16.0193 25.397 15.6812ZM83.9889 33.5043H80.9525C80.7439 33.5042 80.5374 33.5455 80.3448 33.6258C80.1521 33.7061 79.977 33.8238 79.8296 33.9722C79.6821 34.1207 79.5652 34.2969 79.4855 34.4909C79.4057 34.6848 79.3647 34.8927 79.3649 35.1026V46.2865C79.3648 46.4964 79.4058 46.7043 79.4855 46.8982C79.5653 47.0921 79.6822 47.2683 79.8297 47.4167C79.9771 47.5651 80.1522 47.6828 80.3448 47.7631C80.5375 47.8434 80.744 47.8847 80.9525 47.8846H91.6354C92.631 47.8846 93.522 47.3662 94.0214 46.5004C94.5211 45.6345 94.522 44.5976 94.0296 43.734L90.3231 37.2034C89.0289 34.9233 86.601 33.5043 83.9889 33.5043ZM82.5403 44.6894V36.7007H83.9889C84.715 36.7012 85.4282 36.8947 86.0563 37.2614C86.6845 37.6282 87.2054 38.1553 87.5664 38.7895L90.9153 44.6894H82.5403Z"
          fill="#FF6F23"
        />
      </g>
      <defs>
        <clipPath id="clip0_6301_673">
          <rect width="100" height="69" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
export function GuaranteeSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="70"
      height="70"
      viewBox="0 0 70 70"
      fill="none"
    >
      <path
        d="M34.0869 67.6741C34.3827 67.7657 34.6905 67.8125 35.0002 67.813C35.3023 67.8123 35.6027 67.767 35.8916 67.6785C40.2888 66.4183 44.4438 64.4305 48.1842 61.7974C48.4065 61.6246 48.5536 61.3727 48.5948 61.0942C48.6361 60.8157 48.5684 60.532 48.4058 60.3022C48.2431 60.0724 47.9982 59.9141 47.7218 59.8603C47.4454 59.8065 47.159 59.8614 46.922 60.0135C43.3757 62.5076 39.4366 64.3898 35.2681 65.5818C35.0867 65.6397 34.8917 65.6397 34.7103 65.5818C29.2659 64.0363 24.231 61.3052 19.9666 57.5843C19.8605 57.4798 19.7342 57.3981 19.5955 57.3442C19.4567 57.2903 19.3084 57.2652 19.1597 57.2706C19.0109 57.276 18.8648 57.3117 18.7303 57.3755C18.5958 57.4393 18.4758 57.5299 18.3775 57.6417C18.2793 57.7535 18.2049 57.8842 18.1589 58.0258C18.1129 58.1674 18.0963 58.3169 18.1101 58.4651C18.1239 58.6133 18.1679 58.7571 18.2392 58.8878C18.3105 59.0184 18.4078 59.1332 18.525 59.2249C23.026 63.1541 28.3401 66.0394 34.0869 67.6741ZM6.09126 16.4647C5.94884 16.4457 5.80406 16.4548 5.66518 16.4917C5.52631 16.5286 5.39607 16.5925 5.2819 16.6798C5.16773 16.767 5.07188 16.8759 4.99981 17.0002C4.92774 17.1246 4.88087 17.2618 4.86188 17.4043C4.09079 23.1694 3.17204 37.9537 11.2658 50.7298C11.3426 50.8511 11.4426 50.9562 11.5601 51.0389C11.6775 51.1216 11.8101 51.1804 11.9503 51.2119C12.0904 51.2434 12.2354 51.2469 12.3769 51.2224C12.5185 51.1978 12.6538 51.1457 12.7752 51.0688C12.8965 50.992 13.0016 50.892 13.0843 50.7745C13.167 50.6571 13.2258 50.5245 13.2573 50.3843C13.2888 50.2442 13.2924 50.0992 13.2678 49.9577C13.2433 49.8161 13.1911 49.6808 13.1142 49.5594C5.40329 37.3926 6.29032 23.2219 7.0286 17.6941C7.06717 17.4068 6.9901 17.116 6.81435 16.8855C6.63859 16.6549 6.37851 16.5036 6.09126 16.4647ZM14.2616 53.0988C14.1495 53.1889 14.0563 53.3002 13.9873 53.4263C13.9183 53.5524 13.8749 53.6909 13.8594 53.8338C13.844 53.9767 13.8569 54.1213 13.8973 54.2592C13.9378 54.3972 14.0051 54.5258 14.0953 54.6377C14.4234 55.0446 14.7745 55.4515 15.1355 55.8583C15.2308 55.9661 15.3464 56.054 15.4756 56.117C15.6049 56.1801 15.7453 56.2171 15.8889 56.2258C16.0325 56.2346 16.1763 56.215 16.3123 56.1682C16.4483 56.1214 16.5738 56.0483 16.6815 55.953C16.7892 55.8577 16.8771 55.7421 16.9402 55.6128C17.0032 55.4835 17.0402 55.3431 17.049 55.1995C17.0578 55.056 17.0382 54.9121 16.9914 54.7761C16.9446 54.6401 16.8714 54.5147 16.7761 54.4069C16.4442 54.033 16.12 53.6523 15.8038 53.2651C15.7137 53.1525 15.6022 53.0589 15.4758 52.9896C15.3494 52.9204 15.2106 52.8767 15.0672 52.8613C14.9239 52.8458 14.779 52.8589 14.6407 52.8996C14.5024 52.9404 14.3736 53.0081 14.2616 53.0988ZM62.3308 13.8026C58.3568 13.1109 54.4635 12.017 50.7108 10.5377C45.802 8.59488 41.1735 6.00771 36.947 2.84428C36.3853 2.42181 35.7014 2.19336 34.9985 2.19336C34.2956 2.19336 33.6118 2.42181 33.05 2.84428C30.9444 4.41947 28.7375 5.85465 26.4438 7.14053C26.3181 7.21065 26.2076 7.30485 26.1185 7.41775C26.0293 7.53065 25.9633 7.66003 25.9242 7.79848C25.8852 7.93692 25.8738 8.08172 25.8907 8.22457C25.9077 8.36742 25.9527 8.50552 26.0231 8.63096C26.0935 8.7564 26.188 8.86672 26.3011 8.95559C26.4142 9.04447 26.5438 9.11016 26.6823 9.1489C26.8208 9.18765 26.9657 9.19868 27.1085 9.18137C27.2513 9.16406 27.3893 9.11875 27.5145 9.04803C29.8936 7.71185 32.1823 6.22078 34.3658 4.58444C34.5474 4.44484 34.77 4.36915 34.9991 4.36915C35.2281 4.36915 35.4508 4.44484 35.6324 4.58444C40.0156 7.86742 44.8163 10.5524 49.908 12.5688C53.8022 14.1048 57.8425 15.2408 61.9666 15.9594C62.191 15.9975 62.3972 16.1067 62.5547 16.271C62.7123 16.4353 62.8129 16.6458 62.8416 16.8716C63.5449 21.4938 64.6156 33.4835 59.3744 44.9416C59.3119 45.0726 59.2761 45.2146 59.269 45.3595C59.2619 45.5044 59.2838 45.6493 59.3332 45.7857C59.3827 45.9221 59.4588 46.0472 59.5571 46.1539C59.6554 46.2606 59.7739 46.3467 59.9058 46.4071C60.0377 46.4676 60.1803 46.5012 60.3253 46.5059C60.4703 46.5107 60.6148 46.4866 60.7504 46.435C60.886 46.3834 61.01 46.3054 61.1151 46.2054C61.2203 46.1054 61.3045 45.9855 61.3628 45.8527C66.8502 33.8576 65.7378 21.3593 65.005 16.5402C64.9058 15.8598 64.5936 15.2284 64.1131 14.7365C63.6326 14.2446 63.0087 13.9177 62.3308 13.8026Z"
        fill="#FF6F23"
      />
      <path
        d="M33.9439 59.9671C34.282 60.0912 34.6392 60.1552 34.9994 60.1563C35.3539 60.1559 35.7056 60.0933 36.0384 59.9715C37.5474 59.4407 39.0186 58.8081 40.4419 58.0782C40.5696 58.0124 40.6832 57.9221 40.7761 57.8125C40.8689 57.7028 40.9393 57.5759 40.9831 57.439C41.0269 57.3022 41.0434 57.158 41.0315 57.0148C41.0196 56.8716 40.9796 56.7321 40.9138 56.6044C40.8481 56.4766 40.7577 56.3631 40.6481 56.2702C40.5384 56.1773 40.4115 56.107 40.2747 56.0632C40.1378 56.0193 39.9937 56.0029 39.8505 56.0148C39.7072 56.0267 39.5678 56.0666 39.44 56.1324C38.1023 56.8203 36.7191 57.4159 35.3002 57.9152C35.1015 57.9929 34.8809 57.9929 34.6822 57.9152C29.7785 56.2354 25.3712 53.3592 21.8591 49.547C13.6034 40.5443 12.8761 28.4912 13.1758 22.131C13.1861 21.9615 13.2288 21.7955 13.3016 21.6421C13.4075 21.3839 13.4108 21.095 13.3106 20.8345C13.2105 20.574 13.0146 20.3616 12.763 20.2409C12.5114 20.1201 12.2232 20.1001 11.9573 20.1849C11.6914 20.2697 11.468 20.453 11.3328 20.6971C11.1378 21.1091 11.0238 21.5546 10.997 22.0096C10.6799 28.7329 11.4608 41.4445 20.2513 51.0301C24.0019 55.1007 28.7079 58.1723 33.9439 59.9671ZM55.096 40.4688C55.216 40.5136 55.343 40.5366 55.4711 40.5366C55.6953 40.5366 55.9141 40.4676 56.0978 40.3391C56.2815 40.2105 56.4212 40.0287 56.4981 39.8181C58.4908 34.1012 59.3418 28.0488 59.0028 22.0041C58.9817 21.5621 58.8733 21.1286 58.6837 20.7287C58.494 20.3289 58.2271 19.9705 57.8981 19.6745C57.7939 19.5667 57.6686 19.4815 57.5301 19.4241C57.3915 19.3668 57.2427 19.3385 57.0927 19.3412C56.9428 19.3438 56.795 19.3772 56.6586 19.4393C56.5221 19.5015 56.3999 19.591 56.2995 19.7024C56.1991 19.8138 56.1226 19.9446 56.0749 20.0868C56.0272 20.2289 56.0093 20.3794 56.0221 20.5287C56.035 20.6781 56.0785 20.8233 56.1498 20.9552C56.2212 21.0871 56.3189 21.2029 56.4369 21.2954C56.5513 21.3992 56.6441 21.5247 56.7098 21.6645C56.7755 21.8044 56.8128 21.9559 56.8197 22.1102C57.1452 27.862 56.3392 33.6218 54.4474 39.0634C54.3975 39.1982 54.3748 39.3416 54.3805 39.4852C54.3861 39.6289 54.42 39.77 54.4803 39.9006C54.5405 40.0311 54.6259 40.1485 54.7315 40.246C54.8372 40.3435 54.961 40.4192 55.096 40.4688ZM34.5739 12.121C34.7285 12.0508 34.8983 12.0205 35.0677 12.0332C35.237 12.0458 35.4005 12.1008 35.543 12.1932C38.6913 14.2253 42.0054 15.9881 45.4502 17.4629C45.7148 17.5663 46.0093 17.5627 46.2713 17.4529C46.5333 17.343 46.7423 17.1355 46.854 16.8743C46.9657 16.613 46.9714 16.3186 46.8699 16.0532C46.7683 15.7879 46.5674 15.5725 46.3099 15.4526C42.9783 14.0249 39.7729 12.3191 36.7275 10.3535C36.2808 10.066 35.7697 9.8941 35.24 9.85324C34.7104 9.81238 34.1789 9.90387 33.6934 10.1195C33.4431 10.245 33.2504 10.4619 33.1552 10.7253C33.0599 10.9887 33.0694 11.2786 33.1816 11.5353C33.2938 11.7919 33.5002 11.9957 33.7582 12.1047C34.0162 12.2137 34.3062 12.2195 34.5684 12.121H34.5739ZM51.9416 19.879C52.0437 19.9098 52.1499 19.9252 52.2566 19.9249C52.5191 19.9247 52.7728 19.8301 52.9714 19.6583C53.1699 19.4865 53.3001 19.2491 53.338 18.9893C53.3759 18.7295 53.3192 18.4647 53.1781 18.2433C53.037 18.0219 52.8209 17.8587 52.5694 17.7834C52.0368 17.6216 51.5087 17.4454 50.9856 17.2551C50.7127 17.1567 50.4118 17.1709 50.1493 17.2944C49.8867 17.4178 49.684 17.6406 49.5856 17.9135C49.4873 18.1865 49.5014 18.4873 49.6249 18.7499C49.7484 19.0124 49.9711 19.2152 50.2441 19.3135C50.8106 19.517 51.3761 19.7095 51.9416 19.879Z"
        fill="#FF6F23"
      />
      <path
        d="M29.1058 32.2461C28.4557 31.6092 27.5818 31.2524 26.6716 31.2524C25.7615 31.2524 24.8876 31.6092 24.2375 32.2461L22.8681 33.6429C22.2309 34.3001 21.8746 35.1796 21.8746 36.095C21.8746 37.0105 22.2309 37.89 22.8681 38.5472L31.2484 47.0993C31.565 47.4242 31.9434 47.6825 32.3614 47.8589C32.7793 48.0353 33.2284 48.1261 33.682 48.1261C34.1357 48.1261 34.5847 48.0353 35.0027 47.8589C35.4207 47.6825 35.7991 47.4242 36.1156 47.0993L51.5069 31.3919C52.1441 30.7346 52.5004 29.8552 52.5004 28.9397C52.5004 28.0243 52.1441 27.1448 51.5069 26.4875L50.1375 25.0908C49.8217 24.7651 49.4436 24.5064 49.0257 24.3299C48.6078 24.1535 48.1586 24.063 47.705 24.0638C47.251 24.0629 46.8015 24.1534 46.3833 24.3298C45.965 24.5063 45.5865 24.7651 45.2703 25.0908L34.5516 36.0283C34.3198 36.2576 34.0069 36.3861 33.6809 36.3861C33.3549 36.3861 33.0421 36.2576 32.8103 36.0283L29.1058 32.2461ZM36.1156 37.5585L46.8344 26.621C46.9473 26.504 47.0826 26.4109 47.2323 26.3474C47.382 26.2838 47.5429 26.2511 47.7055 26.2511C47.8682 26.2511 48.0291 26.2838 48.1788 26.3474C48.3285 26.4109 48.4638 26.504 48.5767 26.621L49.9461 28.0188C50.1856 28.2655 50.3195 28.5959 50.3195 28.9397C50.3195 29.2836 50.1856 29.6139 49.9461 29.8607L34.5527 45.5691C34.3209 45.7983 34.008 45.9269 33.682 45.9269C33.356 45.9269 33.0432 45.7983 32.8114 45.5691L24.4311 37.016C24.1916 36.7692 24.0577 36.4389 24.0577 36.095C24.0577 35.7512 24.1916 35.4209 24.4311 35.1741L25.8005 33.7763C26.0326 33.5473 26.3456 33.4188 26.6716 33.4188C26.9977 33.4188 27.3107 33.5473 27.5428 33.7763L31.2484 37.5585C31.8985 38.1951 32.7722 38.5517 33.682 38.5517C34.5919 38.5517 35.4656 38.1951 36.1156 37.5585ZM9.84375 15.3138C9.84387 15.5694 9.93354 15.817 10.0972 16.0134C10.2608 16.2098 10.4881 16.3427 10.7395 16.3889C17.675 17.6664 18.4286 18.42 19.7083 25.3577C19.7551 25.6086 19.8883 25.8352 20.0846 25.9983C20.281 26.1614 20.5282 26.2506 20.7834 26.2506C21.0387 26.2506 21.2859 26.1614 21.4822 25.9983C21.6786 25.8352 21.8117 25.6086 21.8586 25.3577C23.1361 18.4222 23.8897 17.6686 30.8273 16.3889C31.0782 16.3421 31.3049 16.2089 31.4679 16.0126C31.631 15.8162 31.7203 15.569 31.7203 15.3138C31.7203 15.0585 31.631 14.8113 31.4679 14.615C31.3049 14.4186 31.0782 14.2855 30.8273 14.2386C23.8919 12.9611 23.1383 12.2075 21.8586 5.26988C21.8117 5.01898 21.6786 4.79237 21.4822 4.6293C21.2859 4.46622 21.0387 4.37695 20.7834 4.37695C20.5282 4.37695 20.281 4.46622 20.0846 4.6293C19.8883 4.79237 19.7551 5.01898 19.7083 5.26988C18.4308 12.2054 17.6772 12.9589 10.7395 14.2386C10.4881 14.2849 10.2608 14.4178 10.0972 14.6142C9.93354 14.8106 9.84387 15.0581 9.84375 15.3138ZM20.7812 10.1633C21.1061 11.4013 21.7542 12.5307 22.6592 13.4358C23.5643 14.3408 24.6937 14.989 25.9317 15.3138C24.6937 15.6386 23.5643 16.2867 22.6592 17.1918C21.7542 18.0968 21.1061 19.2262 20.7812 20.4643C20.4564 19.2262 19.8083 18.0968 18.9033 17.1918C17.9982 16.2867 16.8688 15.6386 15.6308 15.3138C16.8688 14.989 17.9982 14.3408 18.9033 13.4358C19.8083 12.5307 20.4564 11.4013 20.7812 10.1633ZM64.7292 53.6136C57.7938 52.3361 57.0402 51.5825 55.7605 44.6449C55.7136 44.394 55.5805 44.1674 55.3841 44.0043C55.1878 43.8412 54.9406 43.752 54.6853 43.752C54.4301 43.752 54.1829 43.8412 53.9865 44.0043C53.7902 44.1674 53.657 44.394 53.6102 44.6449C52.3327 51.5804 51.5791 52.334 44.6414 53.6136C44.3905 53.6605 44.1639 53.7936 44.0008 53.99C43.8377 54.1863 43.7485 54.4336 43.7485 54.6888C43.7485 54.944 43.8377 55.1912 44.0008 55.3876C44.1639 55.584 44.3905 55.7171 44.6414 55.764C51.5769 57.0415 52.3305 57.795 53.6102 64.7327C53.657 64.9836 53.7902 65.2102 53.9865 65.3733C54.1829 65.5364 54.4301 65.6256 54.6853 65.6256C54.9406 65.6256 55.1878 65.5364 55.3841 65.3733C55.5805 65.2102 55.7136 64.9836 55.7605 64.7327C57.038 57.7972 57.7916 57.0436 64.7292 55.764C64.9801 55.7171 65.2067 55.584 65.3698 55.3876C65.5329 55.1912 65.6222 54.944 65.6222 54.6888C65.6222 54.4336 65.5329 54.1863 65.3698 53.99C65.2067 53.7936 64.9801 53.6605 64.7292 53.6136ZM54.6875 59.8393C54.3627 58.6012 53.7145 57.4718 52.8095 56.5668C51.9045 55.6618 50.7751 55.0136 49.537 54.6888C50.7751 54.364 51.9045 53.7158 52.8095 52.8108C53.7145 51.9058 54.3627 50.7763 54.6875 49.5383C55.0123 50.7763 55.6605 51.9058 56.5655 52.8108C57.4705 53.7158 58.5999 54.364 59.838 54.6888C58.5999 55.0136 57.4705 55.6618 56.5655 56.5668C55.6605 57.4718 55.0123 58.6012 54.6875 59.8393Z"
        fill="#FF6F23"
      />
    </svg>
  );
}
export function ReturnSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="70"
      height="70"
      viewBox="0 0 70 70"
      fill="none"
    >
      <path
        d="M51.632 26.9354V43.0844C51.6374 43.3542 51.553 43.6182 51.3921 43.8348C51.2312 44.0515 51.0029 44.2086 50.743 44.2814L35.483 49.6364C35.3324 49.709 35.1673 49.7467 35 49.7467C34.8328 49.7467 34.6677 49.709 34.517 49.6364L19.187 44.2814C18.9396 44.197 18.7261 44.0348 18.5785 43.8191C18.4309 43.6033 18.3571 43.3456 18.368 43.0844L18.291 26.9354C18.3022 26.6594 18.4023 26.3944 18.5764 26.18C18.7505 25.9655 18.9892 25.8131 19.257 25.7454L34.594 20.3904C34.717 20.3177 34.8572 20.2794 35 20.2794C35.1429 20.2794 35.2831 20.3177 35.406 20.3904L50.806 25.7454C51.0523 25.8294 51.2649 25.9906 51.4124 26.2049C51.5599 26.4192 51.6345 26.6754 51.625 26.9354H51.632ZM20.447 62.9574C20.1572 62.7953 19.9426 62.5258 19.8494 62.2071C19.7562 61.8883 19.7919 61.5457 19.9488 61.253C20.1057 60.9603 20.3713 60.7409 20.6883 60.6421C21.0054 60.5432 21.3486 60.5728 21.644 60.7244C27.5515 63.8046 34.3398 64.7558 40.8663 63.418C47.3929 62.0802 53.2595 58.535 57.4788 53.379C61.698 48.2231 64.0124 41.7711 64.0325 35.1088C64.0526 28.4465 61.7771 21.9807 57.589 16.7994C57.5545 16.7375 57.4983 16.6906 57.4312 16.6677C57.3641 16.6448 57.291 16.6475 57.2258 16.6753C57.1606 16.7031 57.108 16.7541 57.0781 16.8183C57.0483 16.8826 57.0433 16.9556 57.064 17.0234L57.288 17.9194C57.736 19.5574 55.279 20.1524 54.831 18.6194L53.046 11.7664C52.9835 11.553 52.9806 11.3265 53.0376 11.1115C53.0947 10.8966 53.2094 10.7013 53.3696 10.547C53.5297 10.3926 53.729 10.2851 53.9459 10.236C54.1628 10.1869 54.389 10.1981 54.6 10.2684L61.376 12.0534C61.7018 12.1462 61.9774 12.3647 62.1422 12.6607C62.3069 12.9567 62.3474 13.3061 62.2545 13.6319C62.1617 13.9577 61.9432 14.2333 61.6472 14.3981C61.3512 14.5628 61.0018 14.6032 60.676 14.5104L59.339 14.1394C59.038 14.0624 58.814 14.3634 59.038 14.5804C63.7541 20.156 66.3894 27.1953 66.4942 34.4972C66.5991 41.7991 64.1671 48.9112 59.6131 54.62C55.0592 60.3287 48.6654 64.2805 41.5228 65.801C34.3802 67.3214 26.9313 66.3164 20.447 62.9574ZM50.295 7.4404C51.779 8.2594 50.519 10.4924 49.105 9.6734C43.2259 6.40161 36.3922 5.27576 29.7743 6.48867C23.1563 7.70158 17.166 11.1778 12.8294 16.3219C8.4927 21.466 6.07955 27.9578 6.00323 34.6856C5.92692 41.4133 8.19218 47.9583 12.411 53.1994C12.4577 53.2519 12.5209 53.2869 12.5901 53.2986C12.6594 53.3102 12.7305 53.2979 12.7918 53.2636C12.8531 53.2293 12.9008 53.175 12.927 53.1099C12.9532 53.0448 12.9564 52.9726 12.936 52.9054L12.712 52.0864C12.264 50.4484 14.721 49.8534 15.169 51.3864L16.954 58.2324C17.0206 58.4473 17.0268 58.6764 16.9718 58.8946C16.9168 59.1127 16.8028 59.3115 16.6423 59.4692C16.4817 59.6268 16.2809 59.7372 16.0618 59.7882C15.8426 59.8392 15.6137 59.8289 15.4 59.7584L8.62403 57.9734C6.98603 57.5254 7.65803 55.0684 9.21903 55.5164L10.619 55.8874C10.92 55.9644 11.144 55.6634 10.92 55.3694C0.357029 43.0144 1.17603 24.2614 12.712 12.7254C17.5547 7.88587 23.8403 4.75298 30.62 3.79961C37.3996 2.84624 44.3054 4.12413 50.295 7.4404ZM36.225 33.4104V46.2904C36.227 46.3428 36.2415 46.3939 36.2673 46.4396C36.2931 46.4852 36.3294 46.5241 36.3733 46.5528C36.4171 46.5816 36.4672 46.5995 36.5193 46.605C36.5715 46.6104 36.6242 46.6034 36.673 46.5844L48.951 42.2654C49.028 42.1954 49.175 42.1184 49.175 41.9714V29.0984C49.175 28.9444 48.951 28.7974 48.734 28.8744L36.449 33.1164C36.302 33.1864 36.225 33.2634 36.225 33.4104ZM33.698 46.2904V33.4104C33.6967 33.3536 33.6829 33.2978 33.6575 33.2469C33.6321 33.1961 33.5957 33.1515 33.551 33.1164L28.56 31.4014C28.511 31.3836 28.4584 31.3778 28.4067 31.3843C28.355 31.3908 28.3055 31.4096 28.2625 31.439C28.2194 31.4684 28.1839 31.5076 28.159 31.5534C28.134 31.5992 28.1203 31.6503 28.119 31.7024V36.4624C28.12 36.629 28.0878 36.7942 28.0245 36.9484C27.9611 37.1025 27.8678 37.2425 27.75 37.3604C27.6322 37.4782 27.4921 37.5715 27.338 37.6348C27.1838 37.6982 27.0187 37.7303 26.852 37.7294C26.5188 37.7206 26.2016 37.5842 25.9659 37.3485C25.7302 37.1128 25.5939 36.7956 25.585 36.4624V30.5824C25.5837 30.5256 25.5699 30.4698 25.5445 30.4189C25.5191 30.3681 25.4827 30.3235 25.438 30.2884L21.238 28.8884C21.021 28.8114 20.797 28.9584 20.797 29.1124V41.9994C20.797 42.1464 20.867 42.2234 21.021 42.2934L33.299 46.6124C33.523 46.6894 33.67 46.5354 33.67 46.3184L33.698 46.2904ZM24.248 27.2364L27.524 28.3494C27.5363 28.3667 27.5526 28.3809 27.5715 28.3906C27.5903 28.4004 27.6113 28.4055 27.6325 28.4055C27.6538 28.4055 27.6747 28.4004 27.6936 28.3906C27.7125 28.3809 27.7287 28.3667 27.741 28.3494L38.388 24.6324C38.535 24.6324 38.612 24.4854 38.612 24.3314C38.6073 24.2736 38.5821 24.2193 38.5411 24.1783C38.5001 24.1373 38.4458 24.1122 38.388 24.1074L35.112 22.9174H34.888L24.248 26.6414C24.1825 26.659 24.1247 26.6976 24.0834 26.7514C24.0421 26.8052 24.0198 26.8711 24.0198 26.9389C24.0198 27.0067 24.0421 27.0726 24.0834 27.1264C24.1247 27.1802 24.1825 27.2188 24.248 27.2364ZM32.284 30.0364L34.888 30.9254H35.112L45.752 27.2084C45.8175 27.1908 45.8754 27.1522 45.9167 27.0984C45.9579 27.0446 45.9803 26.9787 45.9803 26.9109C45.9803 26.8431 45.9579 26.7772 45.9167 26.7234C45.8754 26.6696 45.8175 26.6309 45.752 26.6134L43.078 25.6474H42.854L32.284 29.4694C31.983 29.5394 31.983 29.9174 32.284 30.0644V30.0364ZM45.976 38.6254C46.2867 38.5352 46.6201 38.568 46.9073 38.717C47.1945 38.8659 47.4133 39.1196 47.5186 39.4255C47.6239 39.7314 47.6074 40.066 47.4727 40.3601C47.338 40.6542 47.0954 40.8853 46.795 41.0054L42.63 42.4894C42.3194 42.5795 41.9859 42.5468 41.6988 42.3978C41.4116 42.2489 41.1927 41.9952 41.0875 41.6893C40.9822 41.3834 40.9986 41.0488 41.1333 40.7547C41.268 40.4606 41.5107 40.2295 41.811 40.1094L45.976 38.6254Z"
        fill="#FF6F23"
      />
    </svg>
  );
}
export function DiamondSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="70"
      height="70"
      viewBox="0 0 70 70"
      fill="none"
    >
      <g clipPath="url(#clip0_6301_705)">
        <path
          d="M43.2031 35.5469C42.4484 35.5469 41.8359 36.1594 41.8359 36.9141C41.8359 37.6688 42.4484 38.2812 43.2031 38.2812C43.9578 38.2812 44.5703 37.6688 44.5703 36.9141C44.5703 36.1594 43.9578 35.5469 43.2031 35.5469Z"
          fill="#FF6F23"
        />
        <path
          d="M0.341661 32.3474C0.345353 32.3516 0.348634 32.3564 0.352462 32.3605L0.353966 32.3624L33.9868 69.5499C34.2374 69.8271 34.6172 70 35.0008 70C35.3832 70 35.7623 69.829 36.0149 69.5499L69.6477 32.3624L69.6492 32.3605C69.653 32.3563 69.6562 32.3516 69.66 32.3474C69.8698 32.1086 69.9898 31.8041 69.9993 31.4864C70.0088 31.1686 69.9072 30.8576 69.7119 30.6067C69.7081 30.6018 69.7052 30.5962 69.7013 30.5912L58.7638 16.9194C58.6357 16.7592 58.4732 16.63 58.2884 16.5412C58.1036 16.4524 57.9012 16.4062 57.6961 16.4063H12.3055C12.1005 16.4063 11.898 16.4524 11.7132 16.5412C11.5284 16.63 11.366 16.7593 11.2379 16.9194L0.300372 30.5912C0.296408 30.5962 0.293673 30.6016 0.289708 30.6067C0.0946184 30.8576 -0.00692022 31.1687 0.00256188 31.4864C0.012044 31.8041 0.131954 32.1085 0.341661 32.3474ZM27.5717 19.1406H42.4298L48.9923 30.0781H21.0092L27.5717 19.1406ZM20.692 32.8125H49.3094L35.0007 65.2457L20.692 32.8125ZM52.2982 32.8125H65.5538L39.6739 61.4275L52.2982 32.8125ZM17.7033 32.8125L30.3275 61.4275L4.44774 32.8125H17.7033ZM65.7889 30.0781H52.181L45.6185 19.1406H57.0389L65.7889 30.0781ZM12.9624 19.1406H24.3828L17.8203 30.0781H4.21244L12.9624 19.1406Z"
          fill="#FF6F23"
        />
        <path
          d="M37.7344 35.5469H27.5871C26.832 35.5469 26.2199 36.159 26.2199 36.9141C26.2199 37.6692 26.832 38.2812 27.5871 38.2812H37.7344C38.4895 38.2812 39.1016 37.6692 39.1016 36.9141C39.1016 36.159 38.4895 35.5469 37.7344 35.5469ZM35 10.9375C35.7551 10.9375 36.3672 10.3254 36.3672 9.57031V1.36719C36.3672 0.61209 35.7551 0 35 0C34.2449 0 33.6328 0.61209 33.6328 1.36719V9.57031C33.6328 10.3254 34.2449 10.9375 35 10.9375ZM44.17 10.5371L49.6388 5.0683C50.1727 4.53441 50.1727 3.66871 49.6388 3.13469C49.1049 2.60066 48.2392 2.6008 47.7052 3.13469L42.2364 8.60344C41.7025 9.13732 41.7025 10.003 42.2364 10.5371C42.7703 11.0709 43.636 11.0711 44.17 10.5371ZM25.8302 10.5371C26.364 11.0709 27.2297 11.0709 27.7638 10.5371C28.2977 10.0032 28.2977 9.13746 27.7638 8.60344L22.295 3.13469C21.7611 2.6008 20.8954 2.6008 20.3614 3.13469C19.8274 3.66857 19.8275 4.53428 20.3614 5.0683L25.8302 10.5371Z"
          fill="#FF6F23"
        />
      </g>
      <defs>
        <clipPath id="clip0_6301_705">
          <rect width="70" height="70" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
