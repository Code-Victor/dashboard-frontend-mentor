import './App.css';
import  facebook from './images/icon-facebook.svg';
import  instagram from './images/icon-instagram.svg';
import  twitter from './images/icon-twitter.svg';
import  youtube from './images/icon-youtube.svg';
import { ReactComponent as UpLogo } from './images/icon-up.svg';
import { ReactComponent as DownLogo } from './images/icon-down.svg';
import MyToggle from './Toggle';

const Accounts=  [
  {
    Name:'@nathanf',
    Followers:'1987',
    days:12,
    increase:true,
    icon:facebook
  },
  {
    Name:'@nathanf',
    Followers:'1044',
    days: 99,
    increase:true,
    icon:twitter
  },
  {
    Name: '@realnathanf',
    Followers:'11k',
    days:1099,
    increase:true,
    icon:instagram
  },
  {
    Name:'Nathan F.',
    Followers:'8239',
    days:144,
    increase:false,
    icon:youtube
  },
  ]


const stats=[
  {
    title:"Page Views",
    Number:"87",
    change:"3%",
    growth:true,
    icon:facebook
  },
  {
    title:"Likes",
    Number:"52",
    change:"2%",
    growth:false,
    icon:facebook
  },
  {
    title:"Likes",
    Number:"5462",
    change:"2257%",
    growth:true,
    icon:instagram
  },
  {
    title:"Profile Views",
    Number:"52k",
    change:"1375%",
    growth:true,
    icon:instagram
  },
  {
    title:"Retweets",
    Number:"117",
    change:"303%",
    growth:true,
    icon:twitter
  },
  {
    title:"Likes",
    Number:"507",
    change:"553%",
    growth:true,
    icon:twitter
  },
  {
    title:"Likes",
    Number:"107",
    change:"19%",
    growth:false,
    icon:youtube
  },
  {
    title:"Total Views",
    Number:"1407",
    change:"12%",
    growth:false,
    icon:youtube
  },

];

function App() {
  return (
    <>
        <header className="pt-4 bg-white-top dark:bg-blue-top h-56 rounded-b-3xl ">
          <div className="flex justify-between flex-col md:flex-row md:items-center divide-y md:divide-none divide-gray-500 divide-solid  dark:text-white w-3/4 mx-auto ">
            <h1 className="flex flex-col font-extrabold  text-2xl mb-5 md:mb-0">Social Media Dashboard <span className=" text-sm font-bold text-gray-400">Total Followers 23,004</span></h1>
            <div className="flex text-gray-500 font-bold justify-between md:justify-between pt-5 md:pt-0 gap-2  ">
              <h4 text->Dark Mode</h4>
              <MyToggle/></div>
          </div>
        </header>
        <main className="w-3/4 mx-auto ">
          <section className="-mt-10 grid lg:grid-cols-4 md:grid-cols-2 gap-4 mb-4">
          {Accounts.map((element)=>{
            return(
            <div className="px-6 py-4 bg-white-card dark:bg-blue-card dark:text-white flex items-center flex-col gap-y-6 rounded-lg">
                <div className="flex items-center gap-1 font-bold">
                  <img src={element.icon} alt=""  />
                  <h3>{element.Name}</h3>
                </div>
                <h1 className="font-bold text-7xl flex flex-col items-center text-blue-dark dark:text-white">
                  {element.Followers}
                  <span className="text-gray-500 uppercase tracking-widest text-base">Followers</span>
                </h1>
                
                <div className={`flex items-center text-sm ${element.increase?"text-green-500":"text-red-500"} font-bold gap-1`}>
                  {element.increase?<UpLogo/>:<DownLogo/>}
                  {element.days} Today
                </div>
            </div>
            )
          }) } 
          </section>
          <section className="pb-4">
            <h1 className="text-gray-500 font-bold mb-4">Overview - Today</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((element)=>{
                return(
                  <div className="px-4 py-4 sm:px-8 bg-white-card dark:bg-blue-card dark:text-white flex j flex-col  rounded-lg gap-y-6">
                    <div className="flex justify-between h-5">
                      <h2 className="text-gray-500 font-bold">{element.title}</h2>
                      <img src={element.icon} alt="" />
                    </div>
                    <div className="flex justify-between">
                      <h1 className="font-bold text-xl text-blue-dark dark:text-white">
                        {element.Number}
                      </h1>
                      <div className={`flex items-center text-sm ${element.growth?"text-green-500":"text-red-500"} font-bold gap-1`}>
                      {element.growth?<UpLogo/>:<DownLogo/>}
                      {element.change} 
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </section>
        </main>
    </>
  );
}

export default App;
