const TestPage = ()=>{
    return <>
     <h2 class="text-2xl italic">Hoverable Dropdown Menu by KindaCode.com</h2>

<div>
    <button class="peer px-5 py-2 bg-green-600 hover:bg-green-700 text-white">Dropdown</button>
    
  
    <div class="hidden peer-hover:flex hover:flex
     w-[200px]
     flex-col bg-white drop-shadow-lg">
        <a class="px-5 py-3 hover:bg-gray-200" href="#">About Us</a>
        <a class="px-5 py-3 hover:bg-gray-200" href="#">Contact Us</a>
        <a class="px-5 py-3 hover:bg-gray-200" href="#">Privacy Policy</a>
    </div>
</div></>
};
export default TestPage