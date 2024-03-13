export default function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  
  export const getDateDifference = (endDate) => {
    return +new Date(endDate) - +new Date();
  };
  
  export const NairaSymbol = () => {
    return "₦";
  };
  
  export const numbersOnly = (input) => {
    var regex = /[^0-9999999.]/gi;
    input.value = input.value.replace(regex, "");
    return input.value;
  };
  
  export const formatPrice = (amount) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
    }).format(amount);
  };
  
  export const truncateText = (str) => {
    if (str.length < 25) return str;
    return str.substring(0, 25) + "...";
  };
  