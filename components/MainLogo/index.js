import { useEffect, useRef } from 'react';

function MainLogo() {
  const logoRef = useRef()

  useEffect(() => {
    // logoRef.current.classList.remove('active')
    logoRef.current.classList.add('active')
  }, []);

  return (
    <svg
      ref={logoRef}
      width='394'
      height='48'
      viewBox='0 0 394 48'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className=''
    >
      <path
        d='M3.37223 44.4014L3.33595 44.3289L3.27858 44.2715C3.14604 44.1389 3.02857 43.9894 2.92628 43.8218C2.82822 43.6211 2.73845 43.3557 2.66309 43.0165L2.63711 42.8996L2.56096 42.8071C2.01598 42.1454 1.58504 41.3833 1.2699 40.5166L0.800638 40.6873L1.2699 40.5166C0.94909 39.6344 0.728738 38.7329 0.608471 37.8116C0.487894 36.8463 0.467863 35.8814 0.548273 34.9165C0.629315 33.944 0.77047 33.0361 0.970632 32.1921C1.09769 31.7665 1.20351 31.322 1.28842 30.8587C1.49457 30.0756 1.70069 29.3132 1.90676 28.5713L1.9068 28.5713L1.90854 28.5647C2.1029 27.8261 2.38725 27.2513 2.74661 26.8201L2.93064 26.5993L2.83239 26.3291C2.7145 26.0049 2.71799 25.6311 2.89168 25.1795C3.09151 24.6599 3.29064 24.1811 3.48894 23.7427C3.56779 23.6227 3.63469 23.5111 3.68467 23.4112L3.70059 23.3794L3.71184 23.3456C3.74885 23.2346 3.78197 23.1541 3.80967 23.0987L3.82463 23.0688L3.83547 23.0372C4.33491 21.5805 4.81355 20.1861 5.2714 18.8542C5.77072 17.4811 6.24923 16.1704 6.70694 14.9221L6.7074 14.9209C7.54139 12.6274 8.33379 10.3753 9.08458 8.16479C9.86306 5.99281 10.5608 3.68292 11.1782 1.2355C11.4237 1.06398 11.6201 0.96202 11.7706 0.911842L11.8044 0.900592L11.8362 0.884677C11.8916 0.856967 11.9721 0.823844 12.0831 0.786841C12.1252 0.772809 12.1799 0.760983 12.2496 0.754745C13.1222 1.20342 14.1253 1.62927 15.2568 2.03337L15.2667 2.03691L15.2768 2.04003C16.4244 2.39619 17.4336 2.59578 18.2951 2.62203L19.1938 3.41502C19.702 4.00499 20.1314 4.63207 20.4831 5.29644L20.4915 5.3123L20.501 5.32751C20.8209 5.83936 20.9518 6.54615 20.8218 7.50154C20.7315 7.63117 20.6531 7.73085 20.5863 7.8043C20.5458 7.84883 20.5129 7.88004 20.4877 7.90104C20.4619 7.92255 20.4499 7.92854 20.4514 7.92776L20.2485 8.02922L20.1912 8.24879C19.9455 9.19058 19.6809 10.0243 19.3983 10.7517C19.1087 11.4548 18.8193 12.1371 18.5299 12.7984C18.1937 13.555 17.8784 14.3118 17.584 15.0688C17.2901 15.8245 17.0411 16.7293 16.8339 17.7776C16.6111 18.0493 16.4362 18.3131 16.3357 18.5643L16.3187 18.6069L16.3097 18.6518C16.2743 18.8287 16.2208 19.0078 16.1482 19.1893L16.1428 19.203L16.1381 19.2169C16.0614 19.4474 15.9644 19.7002 15.8466 19.9761C15.7569 20.1509 15.6184 20.3235 15.4174 20.4909L15.2667 20.6164L15.2416 20.811C15.0784 22.0757 14.8365 23.0922 14.5249 23.8727L14.0267 25.056L13.5267 26.2435L13.5266 26.2435L13.5233 26.2518C12.9372 27.717 12.3928 29.1825 11.8903 30.6482C11.3712 32.1196 11.073 33.7938 10.988 35.6648L10.9575 36.3354L11.6088 36.1726C12.0781 36.0552 12.495 36 12.8625 36C13.352 36 13.8193 36.0751 14.2669 36.2243L14.4634 36.2898L14.6486 36.1972C16.0907 35.4762 17.6554 35.034 19.3468 34.8728C21.1252 34.7074 22.8824 34.604 24.6185 34.5625C26.0178 34.5623 27.3255 34.5052 28.5409 34.3904C28.6885 34.4915 28.818 34.5765 28.9286 34.6446C29.0638 34.7278 29.2064 34.8083 29.3293 34.8493L29.4063 34.875H29.4875H29.4882H29.489H29.4897H29.4904H29.4912H29.4919H29.4927H29.4934H29.4942H29.4949H29.4957H29.4964H29.4972H29.4979H29.4987H29.4995H29.5002H29.501H29.5018H29.5025H29.5033H29.5041H29.5048H29.5056H29.5064H29.5072H29.508H29.5088H29.5095H29.5103H29.5111H29.5119H29.5127H29.5135H29.5143H29.5151H29.5159H29.5167H29.5175H29.5183H29.5191H29.5199H29.5208H29.5216H29.5224H29.5232H29.524H29.5249H29.5257H29.5265H29.5273H29.5282H29.529H29.5298H29.5307H29.5315H29.5323H29.5332H29.534H29.5349H29.5357H29.5366H29.5374H29.5383H29.5391H29.54H29.5409H29.5417H29.5426H29.5434H29.5443H29.5452H29.546H29.5469H29.5478H29.5487H29.5495H29.5504H29.5513H29.5522H29.5531H29.554H29.5549H29.5557H29.5566H29.5575H29.5584H29.5593H29.5602H29.5611H29.562H29.563H29.5639H29.5648H29.5657H29.5666H29.5675H29.5684H29.5694H29.5703H29.5712H29.5721H29.5731H29.574H29.5749H29.5758H29.5768H29.5777H29.5787H29.5796H29.5805H29.5815H29.5824H29.5834H29.5843H29.5853H29.5862H29.5872H29.5882H29.5891H29.5901H29.591H29.592H29.593H29.5939H29.5949H29.5959H29.5969H29.5978H29.5988H29.5998H29.6008H29.6018H29.6028H29.6038H29.6047H29.6057H29.6067H29.6077H29.6087H29.6097H29.6107H29.6117H29.6127H29.6137H29.6148H29.6158H29.6168H29.6178H29.6188H29.6198H29.6209H29.6219H29.6229H29.6239H29.625H29.626H29.627H29.6281H29.6291H29.6301H29.6312H29.6322H29.6333H29.6343H29.6354H29.6364H29.6375H29.6385H29.6396H29.6406H29.6417H29.6427H29.6438H29.6449H29.6459H29.647H29.6481H29.6492H29.6502H29.6513H29.6524H29.6535H29.6545H29.6556H29.6567H29.6578H29.6589H29.66H29.6611H29.6622H29.6633H29.6644H29.6655H29.6666H29.6677H29.6688H29.6699H29.671H29.6721H29.6732H29.6744H29.6755H29.6766H29.6777H29.6788H29.68H29.6811H29.6822H29.6834H29.6845H29.6856H29.6868H29.6879H29.689H29.6902H29.6913H29.6925H29.6936H29.6948H29.6959H29.6971H29.6982H29.6994H29.7006H29.7017H29.7029H29.7041H29.7052H29.7064H29.7076H29.7087H29.7099H29.7111H29.7123H29.7135H29.7146H29.7158H29.717H29.7182H29.7194H29.7206H29.7218H29.723H29.7242H29.7254H29.7266H29.7278H29.729H29.7302H29.7314H29.7326H29.7338H29.735H29.7363H29.7375H29.7387H29.7399H29.7412H29.7424H29.7436H29.7448H29.7461H29.7473H29.7486H29.7498H29.751H29.7523H29.7535H29.7548H29.756H29.7573H29.7585H29.7598H29.761H29.7623H29.7635H29.7648H29.7661H29.7673H29.7686H29.7699H29.7711H29.7724H29.7737H29.775H29.7762H29.7775H29.7788H29.7801H29.7814H29.7827H29.784H29.7852H29.7865H29.7878H29.7891H29.7904H29.7917H29.793H29.7943H29.7957H29.797H29.7983H29.7996H29.8009H29.8022H29.8035H29.8049H29.8062H29.8075H29.8088H29.8102H29.8115H29.8128H29.8142H29.8155H29.8168H29.8182H29.8195H29.8209H29.8222H29.8236H29.8249H29.8263H29.8276H29.829H29.8303H29.8317H29.833H29.8344H29.8358H29.8371H29.8385H29.8399H29.8412H29.8426H29.844H29.8454H29.8468H29.8481H29.8495H29.8509H29.8523H29.8537H29.8551H29.8565H29.8579H29.8593H29.8607H29.8621H29.8635H29.8649H29.8663H29.8677H29.8691H29.8705H29.8719H29.8733H29.8748H29.8762H29.8776H29.879H29.8804H29.8819H29.8833H29.8847H29.8862H29.8876H29.889H29.8905H29.8919H29.8934H29.8948H29.8963H29.8977H29.8992H29.9006H29.9021H29.9035H29.905H29.9064H29.9079H29.9094H29.9108H29.9123H29.9138H29.9152H29.9167H29.9182H29.9197H29.9211H29.9226H29.9241H29.9256H29.9271H29.9286H29.9301H29.9315H29.933H29.9345H29.936H29.9375H29.939H29.9405H29.942H29.9436H29.9451H29.9466H29.9481H29.9496H29.9511H29.9526H29.9542H29.9557H29.9572H29.9587H29.9603H29.9618H29.9633H29.9649H29.9664H29.9679H29.9695H29.971H29.9726H29.9741H29.9757H29.9772H29.9788H29.9803H29.9819H29.9834H29.985H29.9866H29.9881H29.9897H29.9912H29.9928H29.9944H29.996H29.9975H29.9991H30.0007H30.0023H30.0039H30.0054H30.007H30.0086H30.0102H30.0118H30.0134H30.015H30.0166H30.0182H30.0198H30.0214H30.023H30.0246H30.0262H30.0278H30.0294H30.031H30.0327H30.0343H30.0359H30.0375H30.0391H30.0408H30.0424H30.044H30.0457H30.0473H30.0489H30.0506H30.0522H30.0538H30.0555H30.0571H30.0588H30.0604H30.0621H30.0637H30.0654H30.067H30.0687H30.0704H30.072H30.0737H30.0754H30.077H30.0787H30.0804H30.082H30.0837H30.0854H30.0871H30.0888H30.0904H30.0921H30.0938H30.0955H30.0972H30.0989H30.1006H30.1023H30.104H30.1057H30.1074H30.1091H30.1108H30.1125H30.1132H30.114H30.1147H30.1154H30.1162H30.1169H30.1176H30.1184H30.1191H30.1198H30.1206H30.1213H30.122H30.1228H30.1235H30.1242H30.125H30.1257H30.1264H30.1271H30.1279H30.1286H30.1293H30.1301H30.1308H30.1315H30.1323H30.133H30.1337H30.1345H30.1352H30.1359H30.1367H30.1374H30.1381H30.1389H30.1396H30.1403H30.1411H30.1418H30.1425H30.1433H30.144H30.1447H30.1455H30.1462H30.1469H30.1477H30.1484H30.1491H30.1499H30.1506H30.1513H30.1521H30.1528H30.1535H30.1542H30.155H30.1557H30.1564H30.1572H30.1579H30.1586H30.1594H30.1601H30.1608H30.1616H30.1623H30.163H30.1638H30.1645H30.1652H30.166H30.1667H30.1674H30.1682H30.1689H30.1696H30.1704H30.1711H30.1718H30.1726H30.1733H30.174H30.1748H30.1755H30.1762H30.177H30.1777H30.1784H30.1791H30.1799H30.1806H30.1813H30.1821H30.1828H30.1835H30.1843H30.185H30.1857H30.1865H30.1872H30.1879H30.1887H30.1894H30.1901H30.1909H30.1916H30.1923H30.1931H30.1938H30.1945H30.1953H30.196H30.1967H30.1975H30.1982H30.1989H30.1997H30.2004H30.2011H30.2019H30.2026H30.2033H30.2041H30.2048H30.2055H30.2062H30.207H30.2077H30.2084H30.2092H30.2099H30.2106H30.2114H30.2121H30.2128H30.2136H30.2143H30.215H30.2158H30.2165H30.2172H30.218H30.2187H30.2194H30.2202H30.2209H30.2216H30.2224H30.2231H30.2238H30.2246H30.2253H30.226H30.2268H30.2275H30.2282H30.229H30.2297H30.2304H30.2312H30.2319H30.2326H30.2333H30.2341H30.2348H30.2355H30.2363H30.237H30.2377H30.2385H30.2392H30.2399H30.2407H30.2414H30.2421H30.2429H30.2436H30.2443H30.2451H30.2458H30.2465H30.2473H30.248H30.2487H30.2495H30.2502H30.2509H30.2517H30.2524H30.2531H30.2539H30.2546H30.2553H30.2561H30.2568H30.2575H30.2583H30.259H30.2597H30.2604H30.2612H30.2619H30.2626H30.2634H30.2641H30.2648H30.2656H30.2663H30.267H30.2678H30.2685H30.2692H30.27H30.2707H30.2714H30.2722H30.2729H30.2736H30.2744H30.2751H30.2758H30.2766H30.2773H30.278H30.2788H30.2795H30.2802H30.281H30.2817H30.2824H30.2832H30.2839H30.2846H30.2854H30.2861H30.2868H30.2875H30.2883H30.289H30.2897H30.2905H30.2912H30.2919H30.2927H30.2934H30.2941H30.2949H30.2956H30.2963H30.2971H30.2978H30.2985H30.2993H30.3H30.3007H30.3015H30.3022H30.3029H30.3037H30.3044H30.3051H30.3059H30.3066H30.3073H30.3081H30.3088H30.3095H30.3103H30.311H30.3117H30.3125H30.3132H30.3139H30.3146H30.3154H30.3161H30.3168H30.3176H30.3183H30.319H30.3198H30.3205H30.3212H30.322H30.3227H30.3234H30.3242H30.3249H30.3256H30.3264H30.3271H30.3278H30.3286H30.3293H30.33H30.3308H30.3315H30.3322H30.333H30.3337H30.3344H30.3352H30.3359H30.3366H30.3374H30.3381H30.3388H30.3396H30.3403H30.341H30.3417H30.3425H30.3432H30.3439H30.3447H30.3454H30.3461H30.3469H30.3476H30.3483H30.3491H30.3498H30.3505H30.3513H30.352H30.3527H30.3535H30.3542H30.3549H30.3557H30.3564H30.3571H30.3579H30.3586H30.3593H30.3601H30.3608H30.3615H30.3623H30.363H30.3637H30.3645H30.3652H30.3659H30.3666H30.3674H30.3681H30.3688H30.3696H30.3703H30.371H30.3718H30.3725H30.3732H30.374H30.3747H30.3754H30.3762H30.3769H30.3776H30.3784H30.3791H30.3798H30.3806H30.3813H30.382H30.3828H30.3835H30.3842H30.385H30.3857H30.3864H30.3872H30.3879H30.3886H30.3894H30.3901H30.3908H30.3916H30.3923H30.393H30.3937H30.3945H30.3952H30.3959H30.3967H30.3974H30.3981H30.3989H30.3996H30.4003H30.4011H30.4018H30.4025H30.4033H30.404H30.4047H30.4055H30.4062H30.4069H30.4077H30.4084H30.4091H30.4099H30.4106H30.4113H30.4121H30.4128H30.4135H30.4143H30.415H30.4157H30.4165H30.4172H30.4179H30.4187H30.4194H30.4201H30.4208H30.4216H30.4223H30.423H30.4238H30.4245H30.4252H30.426H30.4267H30.4274H30.4282H30.4289H30.4296H30.4304H30.4311H30.4318H30.4326H30.4333H30.434H30.4348H30.4355H30.4362H30.437H30.4377H30.4384H30.4392H30.4399H30.4406H30.4414H30.4421H30.4428H30.4436H30.4443H30.445H30.4458H30.4465H30.4472H30.4479H30.4487H30.4494H30.4501H30.4509H30.4516H30.4523H30.4531H30.4538H30.4545H30.4553H30.456H30.4567H30.4575H30.4582H30.4589H30.4597H30.4604H30.4611H30.4619H30.4626H30.4633H30.4641H30.4648H30.4655H30.4663H30.467H30.4677H30.4685H30.4692H30.4699H30.4707H30.4714H30.4721H30.4729H30.4736H30.4743H30.475H30.4758H30.4765H30.4772H30.478H30.4787H30.4794H30.4802H30.4809H30.4816H30.4824H30.4831H30.4838H30.4846H30.4853H30.486H30.4868H30.4875C30.5439 34.875 30.6285 34.8824 30.7462 34.9016C31.3189 35.4568 31.8915 35.8766 32.4655 36.1415L32.4803 36.1483L32.4955 36.1542C33.042 36.3643 33.6288 36.574 34.256 36.7832C34.7795 36.9849 35.282 37.2063 35.7639 37.4472L35.7855 37.458L35.808 37.4667C36.2479 37.6358 36.6761 37.8663 37.0926 38.1605L37.6201 41.1494L37.6402 41.2632L37.7081 41.3566C37.8663 41.5741 37.9653 41.7374 38.0188 41.8521C38.0358 41.8885 38.0458 41.9149 38.0515 41.9325L38.05 41.9384V42C38.05 42.2458 37.99 42.4387 37.884 42.5976L37.7763 42.7591L37.8058 42.951L37.8603 43.3052C37.6421 43.361 37.4453 43.42 37.2713 43.4827C36.9997 43.5805 36.7527 43.6977 36.5648 43.8477C36.3269 44.0085 36.0814 44.2123 35.8285 44.4546C35.4481 44.485 35.0844 44.5 34.7375 44.5C33.9041 44.5 33.0559 44.6179 32.1941 44.8508C30.9242 44.4066 29.5412 44.1875 28.05 44.1875C27.4548 44.1875 26.8395 44.2087 26.2042 44.2511L26.2018 44.2513C25.6076 44.2938 25.0133 44.3574 24.4193 44.4422C24.4185 44.4423 24.4176 44.4424 24.4168 44.4425L23.4839 44.5669L22.5628 44.6897C21.9544 44.7299 21.3459 44.75 20.7375 44.75H20.6961L20.6553 44.7568C20.1553 44.8401 19.7939 44.9038 19.5769 44.9472C19.3426 44.9941 19.1103 45.0635 18.8805 45.1543C17.4762 45.6083 15.9469 46.0629 14.2924 46.5179L14.2893 46.5188C12.7079 46.9648 11.1077 47.1875 9.4875 47.1875C7.16479 47.1875 5.33701 46.6107 3.95808 45.5005C3.81408 45.1819 3.69026 44.934 3.59103 44.7852C3.52152 44.6809 3.44836 44.5537 3.37223 44.4014Z'
        fill='#FD3A69'
        stroke='#FD3A69'
        className='svg-elem-1'
      ></path>
      <mask id='path-2-inside-1' fill='white'>
        <path
          d='M42.6125 34.25C41.3625 33.5417 40.4042 32.5417 39.7375 31.25C39.0708 29.9583 38.6958 28.7292 38.6125 27.5625C38.7375 26.5625 39.0083 25.7917 39.425 25.25C39.8 24.6667 40.2583 24.2083 40.8 23.875C41.3417 23.5 41.9042 23.2292 42.4875 23.0625C43.0708 22.8542 43.6333 22.6875 44.175 22.5625L45.1125 22.875C45.3208 23.0833 45.5292 23.2708 45.7375 23.4375C45.9875 23.6042 46.2167 23.7708 46.425 23.9375C46.8417 23.7708 47.0917 23.5208 47.175 23.1875C47.3 22.8542 47.425 22.5208 47.55 22.1875C47.675 21.7292 47.8208 21.2708 47.9875 20.8125C48.1542 20.3542 48.3625 19.8958 48.6125 19.4375C48.5708 19.0625 48.5917 18.7292 48.675 18.4375C48.7583 18.1458 48.8417 17.8958 48.925 17.6875C48.675 17.4792 48.4875 17.375 48.3625 17.375C48.2792 17.3333 48.1125 17.2708 47.8625 17.1875C47.7375 17.1875 47.6125 17.1875 47.4875 17.1875C47.3625 17.1458 47.2167 17.1042 47.05 17.0625C46.425 16.6042 46.0083 16.2292 45.8 15.9375C45.6333 15.6042 45.4458 15.2708 45.2375 14.9375C45.0292 14.6042 44.8417 14.3125 44.675 14.0625C44.5083 13.8125 44.3208 13.5833 44.1125 13.375L43.3625 12.875L43.7375 12.125C43.8208 12.0417 43.8625 11.9375 43.8625 11.8125C43.8625 11.6458 43.7792 11.4167 43.6125 11.125C43.4875 10.5833 43.4667 10.1875 43.55 9.9375L43.675 9.1875C44.0917 8.64583 44.3208 8.33333 44.3625 8.25L44.9875 7.625C45.9458 7.375 46.925 7.10417 47.925 6.8125C48.925 6.47917 49.9042 6.14583 50.8625 5.8125C51.8208 5.47917 52.8 5.14583 53.8 4.8125C54.8 4.47917 55.8 4.1875 56.8 3.9375C57.1333 3.64583 57.4875 3.47917 57.8625 3.4375C58.2792 3.35417 58.6542 3.29167 58.9875 3.25C59.2792 3.25 59.55 3.22917 59.8 3.1875C60.05 3.14583 60.2375 3.04167 60.3625 2.875C61.0708 2.625 61.7583 2.41667 62.425 2.25C63.675 1.91667 65.3208 1.52083 67.3625 1.0625C69.4042 0.604167 71.6958 0.270833 74.2375 0.0625L75.55 0C75.8 0.0416667 76.05 0.0625 76.3 0.0625C76.55 0.0208333 76.8 0 77.05 0C79.2167 0 80.6542 0.666667 81.3625 2C81.7792 2.20833 82.1542 2.47917 82.4875 2.8125C82.8208 3.10417 83.1333 3.39583 83.425 3.6875C83.6333 3.89583 83.8208 4.08333 83.9875 4.25C84.1542 4.375 84.3 4.47917 84.425 4.5625L84.925 5.0625C85.3833 6.0625 85.4667 7.04167 85.175 8C84.925 8.5 84.6542 8.79167 84.3625 8.875C84.0708 8.95833 83.7792 9.04167 83.4875 9.125L82.675 9.5625C82.1333 9.52083 81.7167 9.5 81.425 9.5C81.175 9.5 80.8833 9.5 80.55 9.5C79.3 9.5 77.8417 9.58333 76.175 9.75C74.55 9.875 72.8833 10.0833 71.175 10.375C69.4667 10.625 67.8 10.9583 66.175 11.375C64.55 11.75 63.1333 12.1667 61.925 12.625C61.5917 12.875 61.1542 13.1042 60.6125 13.3125C60.4875 13.3542 60.3 13.4583 60.05 13.625C60.0917 13.9583 60.0917 14.2917 60.05 14.625C60.0083 14.9167 59.9458 15.2083 59.8625 15.5C59.8208 15.7083 59.7792 15.9375 59.7375 16.1875C59.7375 16.3958 59.7167 16.625 59.675 16.875C58.8 17.9167 58.3833 19.1458 58.425 20.5625L58.1125 21.1875C57.9458 21.3542 57.8 21.6042 57.675 21.9375C57.5917 22.2292 57.5917 22.5417 57.675 22.875L57.925 23.625C58.7583 23.5417 59.5708 23.4583 60.3625 23.375C61.1958 23.25 62.0708 23.125 62.9875 23C64.1542 22.7917 65.3208 22.625 66.4875 22.5C67.6958 22.3333 68.9458 22.25 70.2375 22.25H72.675L72.1125 22.8125L72.8 22.875L72.425 23.875C72.7167 24 72.925 24.1042 73.05 24.1875C73.2167 24.2292 73.3625 24.2917 73.4875 24.375L73.925 25C74.1333 25.125 74.3208 25.3333 74.4875 25.625C74.6542 25.875 74.7583 26.2292 74.8 26.6875L74.6125 27.3125L71.675 31.0625L71.3 31.5625L70.675 31.375C69.8833 31.3333 69.1333 31.4167 68.425 31.625C68.0917 31.7083 67.7375 31.8125 67.3625 31.9375C66.9875 32.0208 66.6125 32.0625 66.2375 32.0625C65.2375 32.2292 64.4042 32.375 63.7375 32.5C63.0708 32.5833 62.4042 32.6667 61.7375 32.75C60.8208 32.9167 59.925 33.0833 59.05 33.25C58.2167 33.375 57.425 33.5833 56.675 33.875C56.2167 33.9167 55.9458 33.9375 55.8625 33.9375C55.7792 33.8958 55.6958 33.875 55.6125 33.875C55.1958 33.875 54.7792 33.9375 54.3625 34.0625C53.9458 34.1875 53.55 34.3125 53.175 34.4375C52.925 34.6458 52.7583 34.875 52.675 35.125C52.5917 35.3333 52.5083 35.5625 52.425 35.8125C52.3417 36.1042 52.2167 36.3958 52.05 36.6875C51.925 36.9375 51.7583 37.2083 51.55 37.5L51.6125 38.625C51.2375 38.7083 51.05 38.7708 51.05 38.8125C51.05 38.8125 51.0292 38.8125 50.9875 38.8125C50.9875 39.1458 50.925 39.4583 50.8 39.75C50.7167 40.0417 50.6333 40.3125 50.55 40.5625C50.4667 40.7292 50.4042 40.875 50.3625 41C50.3208 41.125 50.3 41.25 50.3 41.375C50.7167 42.125 50.8208 42.9792 50.6125 43.9375C50.4458 44.7292 50.1333 45.4375 49.675 46.0625C49.2167 46.6458 48.675 47.1042 48.05 47.4375C47.3833 47.5208 46.8833 47.5 46.55 47.375C46.2583 47.25 45.9458 47.125 45.6125 47C45.4042 46.9167 45.1958 46.8542 44.9875 46.8125C44.7792 46.7292 44.5708 46.6667 44.3625 46.625L43.6125 46C43.4875 45.75 43.3417 45.5208 43.175 45.3125C43.0083 45.0625 42.8417 44.8125 42.675 44.5625C42.4667 44.2708 42.2583 43.9792 42.05 43.6875C41.8417 43.3958 41.6542 43.0625 41.4875 42.6875C41.1958 41.2292 41.1333 40.0208 41.3 39.0625C41.5083 38.0625 41.7792 37.0833 42.1125 36.125C42.1958 35.7917 42.2792 35.4792 42.3625 35.1875C42.4458 34.8958 42.5292 34.5833 42.6125 34.25Z'
          className='svg-elem-2'
        ></path>
      </mask>
      <path
        d='M42.6125 34.25C41.3625 33.5417 40.4042 32.5417 39.7375 31.25C39.0708 29.9583 38.6958 28.7292 38.6125 27.5625C38.7375 26.5625 39.0083 25.7917 39.425 25.25C39.8 24.6667 40.2583 24.2083 40.8 23.875C41.3417 23.5 41.9042 23.2292 42.4875 23.0625C43.0708 22.8542 43.6333 22.6875 44.175 22.5625L45.1125 22.875C45.3208 23.0833 45.5292 23.2708 45.7375 23.4375C45.9875 23.6042 46.2167 23.7708 46.425 23.9375C46.8417 23.7708 47.0917 23.5208 47.175 23.1875C47.3 22.8542 47.425 22.5208 47.55 22.1875C47.675 21.7292 47.8208 21.2708 47.9875 20.8125C48.1542 20.3542 48.3625 19.8958 48.6125 19.4375C48.5708 19.0625 48.5917 18.7292 48.675 18.4375C48.7583 18.1458 48.8417 17.8958 48.925 17.6875C48.675 17.4792 48.4875 17.375 48.3625 17.375C48.2792 17.3333 48.1125 17.2708 47.8625 17.1875C47.7375 17.1875 47.6125 17.1875 47.4875 17.1875C47.3625 17.1458 47.2167 17.1042 47.05 17.0625C46.425 16.6042 46.0083 16.2292 45.8 15.9375C45.6333 15.6042 45.4458 15.2708 45.2375 14.9375C45.0292 14.6042 44.8417 14.3125 44.675 14.0625C44.5083 13.8125 44.3208 13.5833 44.1125 13.375L43.3625 12.875L43.7375 12.125C43.8208 12.0417 43.8625 11.9375 43.8625 11.8125C43.8625 11.6458 43.7792 11.4167 43.6125 11.125C43.4875 10.5833 43.4667 10.1875 43.55 9.9375L43.675 9.1875C44.0917 8.64583 44.3208 8.33333 44.3625 8.25L44.9875 7.625C45.9458 7.375 46.925 7.10417 47.925 6.8125C48.925 6.47917 49.9042 6.14583 50.8625 5.8125C51.8208 5.47917 52.8 5.14583 53.8 4.8125C54.8 4.47917 55.8 4.1875 56.8 3.9375C57.1333 3.64583 57.4875 3.47917 57.8625 3.4375C58.2792 3.35417 58.6542 3.29167 58.9875 3.25C59.2792 3.25 59.55 3.22917 59.8 3.1875C60.05 3.14583 60.2375 3.04167 60.3625 2.875C61.0708 2.625 61.7583 2.41667 62.425 2.25C63.675 1.91667 65.3208 1.52083 67.3625 1.0625C69.4042 0.604167 71.6958 0.270833 74.2375 0.0625L75.55 0C75.8 0.0416667 76.05 0.0625 76.3 0.0625C76.55 0.0208333 76.8 0 77.05 0C79.2167 0 80.6542 0.666667 81.3625 2C81.7792 2.20833 82.1542 2.47917 82.4875 2.8125C82.8208 3.10417 83.1333 3.39583 83.425 3.6875C83.6333 3.89583 83.8208 4.08333 83.9875 4.25C84.1542 4.375 84.3 4.47917 84.425 4.5625L84.925 5.0625C85.3833 6.0625 85.4667 7.04167 85.175 8C84.925 8.5 84.6542 8.79167 84.3625 8.875C84.0708 8.95833 83.7792 9.04167 83.4875 9.125L82.675 9.5625C82.1333 9.52083 81.7167 9.5 81.425 9.5C81.175 9.5 80.8833 9.5 80.55 9.5C79.3 9.5 77.8417 9.58333 76.175 9.75C74.55 9.875 72.8833 10.0833 71.175 10.375C69.4667 10.625 67.8 10.9583 66.175 11.375C64.55 11.75 63.1333 12.1667 61.925 12.625C61.5917 12.875 61.1542 13.1042 60.6125 13.3125C60.4875 13.3542 60.3 13.4583 60.05 13.625C60.0917 13.9583 60.0917 14.2917 60.05 14.625C60.0083 14.9167 59.9458 15.2083 59.8625 15.5C59.8208 15.7083 59.7792 15.9375 59.7375 16.1875C59.7375 16.3958 59.7167 16.625 59.675 16.875C58.8 17.9167 58.3833 19.1458 58.425 20.5625L58.1125 21.1875C57.9458 21.3542 57.8 21.6042 57.675 21.9375C57.5917 22.2292 57.5917 22.5417 57.675 22.875L57.925 23.625C58.7583 23.5417 59.5708 23.4583 60.3625 23.375C61.1958 23.25 62.0708 23.125 62.9875 23C64.1542 22.7917 65.3208 22.625 66.4875 22.5C67.6958 22.3333 68.9458 22.25 70.2375 22.25H72.675L72.1125 22.8125L72.8 22.875L72.425 23.875C72.7167 24 72.925 24.1042 73.05 24.1875C73.2167 24.2292 73.3625 24.2917 73.4875 24.375L73.925 25C74.1333 25.125 74.3208 25.3333 74.4875 25.625C74.6542 25.875 74.7583 26.2292 74.8 26.6875L74.6125 27.3125L71.675 31.0625L71.3 31.5625L70.675 31.375C69.8833 31.3333 69.1333 31.4167 68.425 31.625C68.0917 31.7083 67.7375 31.8125 67.3625 31.9375C66.9875 32.0208 66.6125 32.0625 66.2375 32.0625C65.2375 32.2292 64.4042 32.375 63.7375 32.5C63.0708 32.5833 62.4042 32.6667 61.7375 32.75C60.8208 32.9167 59.925 33.0833 59.05 33.25C58.2167 33.375 57.425 33.5833 56.675 33.875C56.2167 33.9167 55.9458 33.9375 55.8625 33.9375C55.7792 33.8958 55.6958 33.875 55.6125 33.875C55.1958 33.875 54.7792 33.9375 54.3625 34.0625C53.9458 34.1875 53.55 34.3125 53.175 34.4375C52.925 34.6458 52.7583 34.875 52.675 35.125C52.5917 35.3333 52.5083 35.5625 52.425 35.8125C52.3417 36.1042 52.2167 36.3958 52.05 36.6875C51.925 36.9375 51.7583 37.2083 51.55 37.5L51.6125 38.625C51.2375 38.7083 51.05 38.7708 51.05 38.8125C51.05 38.8125 51.0292 38.8125 50.9875 38.8125C50.9875 39.1458 50.925 39.4583 50.8 39.75C50.7167 40.0417 50.6333 40.3125 50.55 40.5625C50.4667 40.7292 50.4042 40.875 50.3625 41C50.3208 41.125 50.3 41.25 50.3 41.375C50.7167 42.125 50.8208 42.9792 50.6125 43.9375C50.4458 44.7292 50.1333 45.4375 49.675 46.0625C49.2167 46.6458 48.675 47.1042 48.05 47.4375C47.3833 47.5208 46.8833 47.5 46.55 47.375C46.2583 47.25 45.9458 47.125 45.6125 47C45.4042 46.9167 45.1958 46.8542 44.9875 46.8125C44.7792 46.7292 44.5708 46.6667 44.3625 46.625L43.6125 46C43.4875 45.75 43.3417 45.5208 43.175 45.3125C43.0083 45.0625 42.8417 44.8125 42.675 44.5625C42.4667 44.2708 42.2583 43.9792 42.05 43.6875C41.8417 43.3958 41.6542 43.0625 41.4875 42.6875C41.1958 41.2292 41.1333 40.0208 41.3 39.0625C41.5083 38.0625 41.7792 37.0833 42.1125 36.125C42.1958 35.7917 42.2792 35.4792 42.3625 35.1875C42.4458 34.8958 42.5292 34.5833 42.6125 34.25Z'
        fill='#FD3A69'
        stroke='#FD3A69'
        strokeWidth='2'
        mask='url(#path-2-inside-1)'
        className='svg-elem-3'
      ></path>
      <path
        d='M114.239 40.3777L114.242 40.3865L114.245 40.3953C114.469 40.9779 114.724 41.4707 115.016 41.86C115.366 42.3272 115.856 42.572 116.44 42.572C117.048 42.572 117.567 42.3411 117.928 41.86C118.22 41.4707 118.475 40.9779 118.699 40.3953L118.702 40.388L118.704 40.3806L131.835 2.70001H137.231L122.818 42.5402C122.818 42.5405 122.818 42.5409 122.818 42.5412C122.204 44.2201 121.341 45.4016 120.255 46.1383L120.255 46.1382L120.248 46.1431C119.19 46.8875 117.929 47.268 116.44 47.268C115.041 47.268 113.795 46.9108 112.687 46.2011C111.646 45.4651 110.783 44.2628 110.125 42.5379L95.7126 2.70001H101.362L114.239 40.3777Z'
        fill='white'
        stroke='white'
        className='svg-elem-4'
      ></path>
      <path
        d='M143.368 22.2055L143.368 22.2055L143.37 22.2024C144.653 19.6755 146.429 17.6967 148.696 16.2538L148.696 16.2538C150.953 14.8175 153.588 14.092 156.62 14.092C159.919 14.092 162.612 14.8017 164.73 16.1865L164.73 16.1865L164.734 16.1888C166.912 17.5865 168.533 19.4736 169.604 21.8606L169.605 21.8634C170.681 24.2222 171.224 26.8808 171.224 29.848C171.224 30.682 171.181 31.4537 171.095 32.164H147.212H146.656L146.715 32.7168C146.936 34.8037 147.628 36.6024 148.802 38.0934L148.802 38.0934L148.807 38.0994C149.971 39.5313 151.447 40.6248 153.224 41.3802L153.231 41.3831L153.238 41.3858C155.051 42.0935 157.034 42.444 159.18 42.444H167.192V46.5H159.308C155.744 46.5 152.621 45.8507 149.927 44.5667C147.275 43.24 145.192 41.402 143.665 39.052C142.186 36.6672 141.439 33.8824 141.439 30.68C141.439 27.5071 142.086 24.6861 143.368 22.2055ZM146.648 28.4775L146.62 29.004H147.147H165.771H166.271V28.504C166.271 27.0298 165.981 25.5003 165.409 23.9183C164.823 22.2939 163.83 20.9189 162.442 19.7978C161.001 18.5918 159.039 18.02 156.62 18.02C154.566 18.02 152.774 18.5574 151.27 19.6508C149.838 20.6804 148.72 22.002 147.917 23.6084L147.917 23.6084L147.914 23.6134C147.16 25.1655 146.737 26.7882 146.648 28.4775Z'
        fill='white'
        stroke='white'
        className='svg-elem-5'
      ></path>
      <path
        d='M179.539 23.64V46.5H184.427V24.024C184.427 22.5254 184.837 21.2824 185.712 20.3568C186.598 19.3749 187.858 18.916 189.408 18.916H194.54V14.86H188.32C185.518 14.86 183.374 15.6602 181.825 17.2095C181.825 17.2095 181.825 17.2095 181.825 17.2095M179.539 23.64H179.039C179.039 20.7387 179.85 18.4773 181.471 16.856L181.825 17.2095M179.539 23.64C179.539 20.8343 180.321 18.7138 181.825 17.2095M179.539 23.64L181.825 17.2095'
        fill='white'
        stroke='white'
        className='svg-elem-6'
      ></path>
      <path
        d='M201.027 2.80977L201.027 2.80991L201.037 2.79986C201.711 2.08808 202.518 1.73999 203.49 1.73999C204.412 1.73999 205.201 2.08365 205.879 2.79986L205.888 2.8096L205.898 2.81883C206.614 3.49757 206.958 4.28586 206.958 5.20799C206.958 6.1313 206.613 6.94572 205.888 7.67058C205.212 8.3466 204.421 8.67599 203.49 8.67599C202.512 8.67599 201.703 8.34401 201.032 7.67508C200.35 6.95373 200.021 6.13814 200.021 5.20799C200.021 4.27666 200.35 3.48586 201.027 2.80977ZM200.981 46.5V14.86H205.934V46.5H200.981Z'
        fill='white'
        stroke='white'
        className='svg-elem-7'
      ></path>
      <path
        d='M223.796 14.86H238.335V18.916H224.372C222.968 18.916 221.787 19.3896 220.873 20.3518L220.873 20.3521C220.022 21.2509 219.584 22.3109 219.584 23.512C219.584 24.7131 220.022 25.7731 220.873 26.6718L220.882 26.6816L220.892 26.6908C221.82 27.5709 223.089 27.98 224.628 27.98H230.9C234.325 27.98 236.853 28.7947 238.564 30.3464L238.564 30.3464L238.568 30.3501C240.316 31.8997 241.215 34.0973 241.215 37.016C241.215 38.679 240.811 40.2372 240 41.6984C239.19 43.114 238.058 44.2691 236.591 45.1653C235.141 46.0518 233.483 46.5 231.604 46.5H215.784V42.444H230.9C232.544 42.444 233.885 41.9371 234.853 40.8731C235.827 39.8069 236.327 38.5795 236.327 37.208C236.327 35.929 235.874 34.807 234.982 33.8648C234.095 32.8365 232.812 32.356 231.219 32.356H224.628C221.554 32.356 219.136 31.6099 217.328 30.1654C215.592 28.7024 214.696 26.5758 214.696 23.704C214.696 22.1253 215.079 20.6757 215.844 19.3455C216.61 18.0153 217.678 16.946 219.057 16.1349L219.057 16.135L219.066 16.1294C220.43 15.287 222.001 14.86 223.796 14.86Z'
        fill='white'
        stroke='white'
        className='svg-elem-8'
      ></path>
      <path
        d='M257.546 14.86H272.085V18.916H258.122C256.718 18.916 255.537 19.3896 254.623 20.3518L254.623 20.3521C253.772 21.2506 253.333 22.3105 253.333 23.512C253.333 24.7134 253.772 25.7733 254.623 26.6718L254.632 26.6816L254.642 26.6908C255.57 27.5709 256.839 27.98 258.378 27.98H264.65C268.075 27.98 270.603 28.7947 272.314 30.3464L272.314 30.3464L272.318 30.3501C274.066 31.8997 274.965 34.0973 274.965 37.016C274.965 38.679 274.561 40.2372 273.75 41.6984C272.94 43.114 271.808 44.2691 270.341 45.1653C268.891 46.0518 267.233 46.5 265.354 46.5H249.533V42.444H264.65C266.294 42.444 267.635 41.9371 268.603 40.8731C269.577 39.8069 270.077 38.5795 270.077 37.208C270.077 35.929 269.624 34.807 268.732 33.8648C267.845 32.8365 266.562 32.356 264.969 32.356H258.378C255.304 32.356 252.887 31.6099 251.079 30.1654C249.342 28.7023 248.445 26.5757 248.445 23.704C248.445 22.1256 248.829 20.6759 249.594 19.3455C250.36 18.0153 251.428 16.946 252.807 16.1349L252.807 16.135L252.816 16.1294C254.18 15.287 255.751 14.86 257.546 14.86Z'
        fill='white'
        stroke='white'
        className='svg-elem-9'
      ></path>
      <path
        d='M283.778 2.80954L283.778 2.80967L283.787 2.79986C284.461 2.08808 285.268 1.73999 286.24 1.73999C287.162 1.73999 287.951 2.08365 288.629 2.79986L288.638 2.8096L288.648 2.81883C289.364 3.49757 289.708 4.28587 289.708 5.20799C289.708 6.13129 289.363 6.94572 288.638 7.67058C287.962 8.3466 287.171 8.67599 286.24 8.67599C285.262 8.67599 284.453 8.34405 283.782 7.67519C283.101 6.95355 282.771 6.13781 282.771 5.20799C282.771 4.27695 283.101 3.48594 283.778 2.80954ZM283.732 46.5V14.86H288.684V46.5H283.732Z'
        fill='white'
        stroke='white'
        className='svg-elem-10'
      ></path>
      <path
        d='M303.87 27.352V46.5H298.982V27.352C298.982 24.9142 299.539 22.7169 300.646 20.7491L300.646 20.7491L300.648 20.7453C301.753 18.7394 303.349 17.1406 305.449 15.9466L305.449 15.9467L305.456 15.9429C307.54 14.717 310.072 14.092 313.074 14.092C315.216 14.092 317.343 14.5654 319.459 15.5198L319.459 15.5199L319.47 15.5245C321.565 16.4104 323.188 18.002 324.337 20.3405L324.475 20.62H324.786H324.85H325.157L325.296 20.3467C326.487 18.005 328.133 16.4112 330.229 15.5245L330.229 15.5245L330.236 15.5212C332.395 14.566 334.567 14.092 336.753 14.092C339.712 14.092 342.223 14.7164 344.309 15.9429L344.308 15.943L344.315 15.9466C346.415 17.1406 348.01 18.7393 349.115 20.7453L349.117 20.7491C350.224 22.7169 350.781 24.9142 350.781 27.352V46.5H345.894V27.352C345.894 25.648 345.489 24.0885 344.674 22.6849C343.863 21.288 342.756 20.1808 341.359 19.3694C339.994 18.5507 338.433 18.148 336.689 18.148C334.982 18.148 333.402 18.5755 331.96 19.431C330.523 20.2401 329.374 21.3442 328.519 22.7386L328.519 22.7386L328.513 22.7489C327.699 24.1506 327.294 25.6883 327.294 27.352V46.5H322.406V27.352C322.406 25.6846 321.976 24.1451 321.118 22.7437C320.306 21.3471 319.179 20.2421 317.743 19.4328C316.338 18.5737 314.756 18.148 313.01 18.148C311.305 18.148 309.746 18.5526 308.343 19.3676L308.343 19.3676L308.337 19.3712C306.983 20.1837 305.898 21.2909 305.089 22.6849C304.274 24.0887 303.87 25.6482 303.87 27.352Z'
        fill='white'
        stroke='white'
        className='svg-elem-11'
      ></path>
      <path
        d='M367.322 16.3279L367.324 16.3266C369.843 14.8405 372.718 14.092 375.966 14.092C379.214 14.092 382.067 14.8406 384.541 16.3247L384.541 16.3248L384.549 16.3297C387.074 17.7781 389.036 19.7606 390.442 22.2835L390.442 22.2835L390.447 22.2919C391.892 24.7693 392.618 27.5611 392.618 30.68C392.618 33.7987 391.892 36.6133 390.445 39.1352L390.444 39.1374C389.038 41.6188 387.074 43.604 384.545 45.0967C382.071 46.5397 379.216 47.268 375.966 47.268C372.717 47.268 369.841 46.5404 367.323 45.0967C364.838 43.6049 362.875 41.6197 361.425 39.1363C360.02 36.6146 359.315 33.7996 359.315 30.68C359.315 27.5591 360.021 24.7657 361.425 22.2877C362.875 19.7604 364.839 17.7763 367.322 16.3279ZM386.202 37.056L386.202 37.0561L386.204 37.0516C387.182 35.1399 387.667 33.0127 387.667 30.68C387.667 28.3483 387.182 26.2411 386.203 24.3701C385.226 22.4611 383.865 20.9431 382.124 19.827C380.368 18.7016 378.31 18.148 375.966 18.148C373.664 18.148 371.607 18.7026 369.813 19.824L369.813 19.8239L369.808 19.827C368.067 20.9432 366.707 22.4612 365.73 24.3701C364.751 26.2413 364.267 28.3484 364.267 30.68C364.267 33.0126 364.751 35.1398 365.729 37.0516L365.729 37.0516L365.731 37.0561C366.709 38.923 368.069 40.4182 369.808 41.5329L369.808 41.5329L369.813 41.536C371.607 42.6574 373.664 43.212 375.966 43.212C378.31 43.212 380.368 42.6584 382.124 41.5329C383.863 40.4183 385.224 38.9231 386.202 37.056Z'
        fill='white'
        stroke='white'
        className='svg-elem-12'
      ></path>
    </svg>
  );
}

export default MainLogo;
