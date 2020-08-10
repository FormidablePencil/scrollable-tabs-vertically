import React, { useRef, useEffect, useState } from 'react';
import './App.css';
import NavTabsWrapper from './components/NavTabsWrapper';
import TabNavbar from './components/TabNavbar';

function App() {
  const [tabFixed, setTabFixed] = useState({
    firstSection: false,
    secondSection: false,
    thirdSection: false,
    fourthSection: false,
  })
  const trackOnChangeTabFixed = useRef({
    firstSection: false,
    secondSection: false,
    thirdSection: false,
    fourthSection: false,
  })

  const tabFixedTopOffset = 0
  const firstSection = useRef(null)
  const secondSection = useRef(null)
  const thirdSection = useRef(null)
  const fourthSection = useRef(null)
  const anchor = ['first', 'second', 'third', 'fourth']

  useEffect(() => {
    document.addEventListener('scroll', onScroll)
    return () => document.removeEventListener('scroll', onScroll)
    // eslint-disable-next-line 
  }, [])

  const onScroll = () => {
    toggleTabPositionOnScroll(firstSection, 'firstSection')
    toggleTabPositionOnScroll(secondSection, 'secondSection')
    toggleTabPositionOnScroll(thirdSection, 'thirdSection')
    // toggleTabPositionOnScroll(fourthSection, 'fourthSection')
  }

  const toggleTabPositionOnScroll = (ref, variable) => {
    // console.log(ref.current.getBoundingClientRect().top);
    if (ref.current.getBoundingClientRect().top === 0) {
      if (trackOnChangeTabFixed.current[variable] !== true) {// since changes done to useState doesn't seem to reflect in this funciton and just return the same value as before I implemented a little hack with ref to track when useState was changed by changing ref along with it. I didn't want setState to fire everytime and destroy the proformance of the app.
        setTabFixed(prev => ({ ...prev, [variable]: true }))
        trackOnChangeTabFixed.current = ({ ...trackOnChangeTabFixed.current, [variable]: true })
      }
    } else {
      if (trackOnChangeTabFixed.current[variable] !== false) {
        setTabFixed(prev => ({ ...prev, [variable]: false }))
        trackOnChangeTabFixed.current = ({ ...trackOnChangeTabFixed.current, [variable]: false })
      }
    }
  }

  const getNavTabPosition = (index) => {
    if (index === 0) return 44
    else return 50 * index * 3 + 44
  }

  //* toggle overflowY: 'scroll' when scrolling up and tab's inner content reaches top and vise versa
  //~ we need: when tab becomes sticky then toggle overflow scroll. when next tab section starts moving then toggle off overflow scroll until that tab disapears.
  console.log(tabFixed.secondSection);
  
  return (
    <>
      {/* <TabNavbar /> */}
      <NavTabsWrapper
        sectionOrder={1}
        tabOffset={getNavTabPosition(0)}
        tabColor='rgba(53,9,121,1)'
        anchor={anchor[0]}
        sectionRef={firstSection}
        contentFixed={false}
        tabFixed={false}>
        <div style={{
          height: '100%',
          width: '100%',
          background: 'linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(53,9,121,1) 0%, rgba(0,255,181,1) 100%)',
          overflowY: 'scroll',
        }}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam voluptate ipsam velit, repellat delectus, neque sapiente fugit ut, illo consectetur impedit aspernatur consequatur ullam distinctio ratione. Debitis quibusdam laborum animi?
          Repellat obcaecati, in officiis ab perferendis nostrum optio sequi necessitatibus minus. Velit hic praesentium, ullam consequuntur sed alias iste id rem similique animi, corporis nulla laboriosam iusto magni eius necessitatibus.
          Facilis, excepturi, architecto odit ipsam doloremque ullam accusamus eligendi officiis ex suscipit, quaerat tempora voluptatibus beatae earum at laudantium incidunt. Dolore quisquam nobis doloribus ex rem odio eaque cum tempora.
          Hic odit accusantium veritatis, deserunt voluptatem illum ad, ullam explicabo molestiae itaque aliquid unde? Quidem quam illo dolore maiores fugit harum explicabo esse laboriosam nemo. In, magnam? Ex, aperiam iusto.
          A, sed animi autem quidem in inventore eos aperiam quasi unde, laborum nobis modi tenetur, ea quibusdam assumenda iure eaque aliquid dicta amet. Eaque ullam adipisci quasi rem vel ipsam?
          Tenetur possimus quis nobis molestias? Molestias omnis repellat aperiam tempore quaerat deleniti officia vero natus corrupti. Laboriosam officia hic qui fuga, facilis nisi vitae? Omnis quos illo rem eos ea!
          Similique perferendis ab vero praesentium sint error ratione eveniet soluta nam aliquid veritatis molestias sunt, dolorum, non quis necessitatibus qui labore iure reprehenderit asperiores exercitationem dicta enim. Consectetur, omnis labore.
          Error ex voluptatibus ipsum dolore cum perferendis sit iure dolor rerum eos. Neque dolorem eaque odit, recusandae sint ad veritatis quos blanditiis, earum nulla assumenda, laborum omnis! Impedit, distinctio dignissimos.
          Commodi modi doloremque eos aliquid ipsam. In fuga expedita, optio soluta eaque magnam delectus cupiditate beatae laboriosam repellat voluptatibus quasi, dolore similique iure amet magni. Corporis ea animi exercitationem ad!
          Molestias atque maiores praesentium quo nostrum fugit ratione sint nam architecto officiis corporis exercitationem ipsam repellendus esse quas illum accusantium reprehenderit cupiditate nesciunt, neque sunt ullam. Laboriosam debitis delectus expedita.
          Fuga libero, ducimus quod facere perspiciatis corporis labore excepturi repellat odio sunt rerum consectetur temporibus a minus quasi vitae atque accusamus at praesentium. Placeat non qui expedita vero sed optio?
          Illum hic natus corrupti commodi fugit omnis? Beatae cum maiores laboriosam ipsa. Earum quibusdam quis ad cupiditate cumque! Temporibus, corporis? Atque laboriosam delectus quo neque id quod voluptates commodi dolores.
          Rem magni dolorum repudiandae sequi accusantium consequatur, ad labore, natus quis esse rerum mollitia distinctio, beatae obcaecati accusamus tenetur suscipit aut doloremque dolores nesciunt? Odit temporibus recusandae laborum quis eius.
          Quo autem quam, mollitia modi velit in vero placeat facere! Voluptate praesentium nam similique atque sit placeat eius illo maiores voluptatem quos, quia voluptatibus molestiae obcaecati cum ea nulla accusamus.
          Inventore rem commodi corrupti distinctio impedit exercitationem neque facere maxime a maiores error, modi quasi numquam obcaecati eos voluptatum laborum ad reprehenderit amet nam earum. Deserunt praesentium exercitationem porro quis?
          Vel, non nihil repellendus error fuga quasi velit consectetur qui harum odio temporibus. Sunt facilis, saepe quasi sequi, fugiat non fugit praesentium nostrum accusantium quod eos molestias debitis sapiente. Ullam!
          Quam, voluptas cum at illum provident, tempore similique architecto voluptatibus non optio voluptate! Optio iste adipisci, dignissimos esse impedit dicta vero aliquid eum modi, dolore sapiente libero dolorem, delectus cupiditate?
          Maxime porro quidem quod nulla distinctio eligendi perspiciatis magnam facilis ratione, harum saepe nobis a unde suscipit exercitationem earum asperiores. Exercitationem a maiores laboriosam dolor reiciendis quidem quae quisquam culpa.
          Voluptatem voluptatibus at inventore eaque, laudantium ad dolorem, magni sint natus sunt optio vel, aspernatur consequuntur. Dolore eligendi numquam maiores accusamus, facere sint ipsam repellendus corrupti expedita, perspiciatis iste repudiandae?
          Quis laborum adipisci iure ipsum saepe, reprehenderit aut cum necessitatibus? Veniam, sint! Aliquam modi animi nulla omnis debitis maxime. Consectetur quasi illo, tempore obcaecati sequi tempora dolor architecto exercitationem accusamus.
          Autem tenetur aspernatur nostrum molestias magni libero beatae expedita reiciendis quisquam distinctio numquam sapiente quaerat ut maiores nemo atque aperiam quia ea, quasi necessitatibus animi labore provident. Laudantium, aspernatur quae.
          Veritatis cumque omnis nemo, illo optio amet veniam totam quidem similique ea magnam temporibus blanditiis ipsum consequuntur quisquam fugit tenetur unde tempore ipsa voluptates! Minima dicta culpa nam odit! Enim.
          Illo quasi eveniet esse blanditiis magni ad a fugiat odit! Nihil repudiandae deserunt, esse molestiae amet repellendus vel aspernatur ea et nam eum neque in laboriosam aliquam totam dolorem dignissimos.
          Natus est, ipsam autem repellat obcaecati facilis! Quibusdam ipsam rerum perferendis aliquid, maiores distinctio hic quia sint quo libero autem mollitia id, voluptatibus reprehenderit illo tempora ex? Architecto, sint quae!
          Ut omnis nemo provident beatae dolores. Qui ab vitae eaque nobis possimus consectetur recusandae sunt natus ipsam velit voluptate deserunt, hic suscipit incidunt officia eum magnam est, nesciunt explicabo veniam?
          Temporibus id asperiores et quia est, corrupti ducimus accusamus labore aperiam illum distinctio repudiandae deserunt veniam placeat, incidunt molestias reprehenderit, dignissimos aut impedit sunt ullam dolorem iusto! Magnam, fuga quis?
          Vitae maxime laudantium aut rerum cumque temporibus modi quia unde eligendi. Mollitia quia veritatis facilis cum accusamus possimus laborum repellendus sint, optio ipsum ipsam porro reiciendis. Perspiciatis in omnis eligendi!
          Ut sit officia quam veritatis officiis provident eligendi cum iure quos quas fugit placeat vel, fugiat quidem magnam. Quod cupiditate quidem magni eaque nam dicta veniam id ipsa qui possimus!
          Dolorum consequatur perspiciatis quibusdam, saepe cumque sequi quo facere qui, laborum perferendis reiciendis atque aliquid excepturi nulla in repellendus commodi minima vitae id obcaecati maxime quasi voluptatibus a. Libero, fugit!
          Recusandae possimus voluptates aspernatur et perferendis totam, reprehenderit porro sed eaque ratione voluptatem optio, dignissimos, eveniet repellendus! Error optio esse dolor tempora mollitia, illo perferendis magni! Voluptas pariatur velit perspiciatis!
          Quasi a minima quaerat? Pariatur porro, quia repellendus quos cumque harum eaque in quod odit corrupti, qui sed possimus, molestiae dolores rem fugit nemo dolorem dolorum sit ullam similique beatae?
          Excepturi, corporis doloribus voluptates aliquam libero aliquid eius, eum laudantium voluptatem similique ipsam odio. Est commodi sed labore rerum facilis, dolores repellat delectus ipsa! Ea, itaque! Quidem voluptas quaerat non!
          Distinctio, perspiciatis accusamus! Nulla quidem eius quasi sequi impedit. Molestiae iure a omnis voluptates vel alias labore voluptatibus repudiandae! Quas rem facere repellendus quo laborum, sed quaerat fugiat quos maiores!
          Suscipit tenetur quisquam minus, recusandae rem dolores repellat exercitationem doloribus pariatur iusto nam error, unde sapiente vitae ullam expedita, placeat laudantium dolorem obcaecati nesciunt impedit! Obcaecati corporis iste voluptatibus veniam.
          Exercitationem consequuntur quasi deserunt earum consectetur dolorum porro, veritatis odit, quia necessitatibus molestiae pariatur quaerat laboriosam dignissimos culpa magni. Inventore consequatur impedit nesciunt ducimus dicta dolore nihil possimus deserunt fugiat.
          Eligendi iusto perferendis vitae eos ex ad nobis sint soluta corrupti aperiam. Sit, fuga aspernatur qui vel saepe facilis maxime expedita omnis nulla, explicabo amet magnam odit commodi cumque quasi!
          Non delectus soluta aliquam sapiente dicta modi consectetur ipsum hic voluptatum est illo corrupti alias officia iusto fugiat, exercitationem cum ducimus laborum at ipsam. Reprehenderit dicta quaerat autem nisi iure?
          Ab placeat excepturi fugit voluptas vel? Expedita veritatis soluta error maxime, itaque architecto eligendi recusandae quasi eos, distinctio atque! Quos voluptate quia explicabo veritatis, sint reprehenderit molestias libero in numquam.
          Facere consequatur aspernatur accusantium, quas inventore quaerat? Error, accusamus voluptates fugiat, molestias maxime sit omnis voluptatibus quas optio vero distinctio pariatur aperiam nihil praesentium assumenda dolor. Nemo magni accusantium impedit!
          Repudiandae similique inventore eligendi veritatis ducimus in. Laborum voluptate cum, animi pariatur suscipit rem perferendis dolor nam accusamus fugit aliquam sunt quis ab itaque quam ipsam at temporibus officiis aspernatur.
          Voluptate veritatis enim perferendis iste assumenda unde, ducimus cumque placeat, necessitatibus, quis quam ut suscipit facilis repellendus sint aperiam tempore neque eaque sequi sunt veniam ullam dolores quod inventore. Nostrum.
          Fuga debitis ipsum laboriosam error ratione provident veritatis perferendis necessitatibus cum, natus, nostrum, rerum molestiae quam. Laudantium veritatis, nulla, praesentium facere iste excepturi maiores dicta soluta quas nemo minus ratione.
          Nostrum eum aut quae error rem non. Provident quibusdam modi, eius aliquid minima earum eaque similique, saepe explicabo officiis rerum aliquam expedita! Ducimus, ratione deserunt ut iusto incidunt earum quis.
          Maiores eos veniam tempore exercitationem! Repellendus odio necessitatibus, sit officiis voluptatem voluptatum quae atque doloremque, sapiente qui, reprehenderit nesciunt tempore ratione cupiditate error veniam voluptates facere. Saepe dolore odio deleniti?
          A mollitia rem est officia voluptatum fuga sed harum nisi cumque totam exercitationem perspiciatis eos ut fugiat, pariatur tempore ad praesentium consectetur iure nesciunt architecto! Odit nesciunt temporibus placeat eius.
          Ut laboriosam temporibus recusandae? Odio quibusdam eligendi, consequatur tempora doloremque molestiae cumque nostrum aperiam asperiores voluptatum odit sit culpa numquam magnam tenetur quos ab dicta reprehenderit atque. Doloremque, adipisci excepturi.
          Eius, fugit earum ratione tenetur rem, suscipit architecto aperiam nulla quibusdam error vero necessitatibus. Pariatur rerum itaque non molestiae incidunt fugiat corporis molestias dolores. Minus dolorum voluptatibus ipsam. Dolorum, dignissimos.
          Vitae, omnis. Amet voluptas nisi placeat officiis! Quia enim, veritatis modi pariatur nobis iste optio, repellat beatae eligendi ipsam ex praesentium minima distinctio explicabo libero? Adipisci consequuntur temporibus praesentium voluptate?
          Ab praesentium architecto, debitis veniam beatae voluptate illo tempore sequi error ea suscipit asperiores veritatis, nemo quia iste alias optio quas iure ut nesciunt rem? Facere odit quos provident earum.
          Earum animi minima numquam sit non incidunt dolores iste tempore facilis totam itaque, autem, neque omnis natus? Dignissimos consectetur rerum, sint sed cum saepe! Inventore aperiam dolorum voluptate nostrum illo.
          Quas, beatae quidem. Nisi earum minus alias perferendis molestiae quo nihil eveniet, quisquam itaque numquam repudiandae fugit quae sit cumque porro, tempore architecto quam ut reprehenderit nobis similique repellat? Pariatur.
          Quaerat repellendus incidunt, iusto numquam alias nisi saepe veniam nesciunt id labore earum quas deserunt praesentium vitae, asperiores atque nostrum ea illum officia eligendi illo? Alias delectus aut perferendis eaque.
          Soluta nesciunt ratione numquam corrupti nobis animi, nisi repellat excepturi inventore. Fugiat repudiandae nisi omnis harum non, rem deserunt labore nostrum magnam commodi sunt iusto unde sint quae debitis accusamus?
          Necessitatibus neque cupiditate deserunt beatae suscipit vitae est deleniti commodi veritatis reprehenderit eveniet ipsum tempore porro qui nam officiis maxime, molestias quam? In ullam fugit voluptate officia doloremque? Deleniti, consectetur?
          Labore repellendus beatae laboriosam illo facilis qui totam fugit maxime animi sit, deleniti debitis earum tenetur. Soluta odio quo blanditiis fugit ratione necessitatibus. Accusamus minima ut officia omnis quasi tenetur.
          Nisi, repellat vero. Culpa inventore quis, deleniti labore ipsum incidunt odit blanditiis saepe aut accusamus voluptas ea sint eveniet sequi dolore repellendus. Voluptatibus sint illum modi necessitatibus hic obcaecati facilis?
          Commodi dolor illo debitis totam fuga corrupti quo saepe quibusdam aspernatur molestias error ut non aut delectus rem enim minima adipisci illum itaque, voluptates quas. Tempora numquam labore quasi aspernatur.
          Qui fuga expedita necessitatibus aliquid cum neque maiores possimus reiciendis aliquam repellat, dolores nemo delectus voluptas ipsa, obcaecati ex eaque facere quia distinctio, impedit aspernatur exercitationem! Deleniti ex laborum dolor?
          Fugit corrupti voluptate delectus, consequuntur in culpa provident accusamus fuga consectetur at labore. Quibusdam sit veniam nam voluptates exercitationem, quod quo molestias itaque sunt, consequatur beatae. Iure natus exercitationem debitis.
          Voluptates eaque, voluptate quibusdam suscipit nobis laudantium quod quidem! Numquam possimus animi voluptatem optio nobis tempore molestiae sequi reprehenderit, temporibus consectetur iure, neque, ipsam obcaecati magnam? Reiciendis laborum odit tenetur.
          Odio earum atque consequuntur ducimus quibusdam debitis sequi ratione iusto provident sapiente inventore est eius hic cumque repellat nesciunt, error suscipit recusandae iste accusantium accusamus mollitia placeat! Aliquid, rem deleniti.
          Minima velit dolorum dolor consequatur minus ipsam corrupti esse quis ducimus, mollitia alias consectetur explicabo enim odio, magni maiores molestias nulla voluptatum. Maiores, sit obcaecati accusantium recusandae commodi voluptas ipsum.
          Placeat pariatur non magni cumque blanditiis? Adipisci laborum fuga, porro dolorem voluptatem ipsa est error qui cupiditate aliquam, nisi libero cumque explicabo ad beatae consectetur. Dignissimos recusandae repudiandae cumque dolor?
          Perferendis illum voluptatem molestias! Eveniet qui tempore voluptas dolor. Eaque doloribus quis officia sequi quibusdam explicabo, voluptates aspernatur! Nam dicta id quasi, odio modi impedit aut distinctio. Similique, magni consequuntur.
          Placeat ab laboriosam temporibus cum mollitia dolorem quaerat eveniet, porro nam optio quos, blanditiis obcaecati rerum iure, minus tenetur quisquam hic itaque quasi laborum voluptatem doloribus quo harum voluptas. Error!
          Ipsa saepe, illum delectus optio nostrum vitae. Deserunt libero dolor sed! Natus, blanditiis dolor. Sint quibusdam, dolor corporis enim eligendi provident nesciunt sit totam voluptates dolorum beatae expedita, vitae perspiciatis.
          Esse earum natus, vitae doloremque neque tempora sed beatae, accusamus laboriosam eaque eos necessitatibus voluptas porro. Dolores sint molestias cupiditate dolorem, optio quasi velit, ratione quos dignissimos sunt dicta veritatis?
          Quisquam illum hic eligendi similique ad neque beatae fugiat minus delectus doloribus voluptatibus dignissimos veritatis ratione repudiandae iure molestiae nihil ea porro exercitationem suscipit nobis aperiam, ipsam dolor consectetur. Nulla.
          Quae ipsum et provident tenetur accusantium eum sed itaque eveniet illum, numquam voluptatem id nesciunt tempora quos ullam fuga voluptatibus deserunt placeat veniam quisquam recusandae sequi. Harum ea consequatur perferendis.
          Molestiae error alias nisi nulla suscipit eveniet itaque. Officia est aspernatur ex ipsum repellat ipsam iste, quae reprehenderit architecto animi ut illo vel odit alias facilis placeat nam quis ducimus!
          Odio sunt magnam cupiditate quos repellendus nihil qui magni non voluptates ducimus eos fuga tempore reiciendis voluptas, iste exercitationem odit corrupti corporis, adipisci dolorem? Expedita provident laborum ullam beatae magni!
          Minima ad fuga enim ratione quod distinctio ullam nesciunt neque et, harum ea molestiae voluptates hic cupiditate nisi, ducimus excepturi est dicta quae, tenetur cumque. Excepturi quam minima dignissimos optio!
          Aspernatur illo accusantium itaque beatae at voluptatem maxime commodi expedita illum fugiat ullam, dicta tenetur suscipit nisi deleniti quaerat corrupti molestiae optio explicabo quae praesentium nemo saepe natus error! Ab?
          Porro quas aut sunt! Excepturi reiciendis voluptates esse optio labore expedita nulla perferendis nesciunt in. Culpa, repellendus accusamus id temporibus dolore nulla nobis veritatis consequuntur ipsam aliquid animi, dignissimos officiis!
          Sint vero iure magnam nisi ut quae officia officiis ducimus praesentium excepturi eius veritatis cum a sit illum rem architecto aliquam, ipsum, reiciendis maiores voluptate. Reprehenderit id harum autem vero.
          Velit consequatur iste eos a adipisci autem quo hic? Assumenda pariatur reprehenderit debitis necessitatibus laudantium velit illum dolores quo corporis sint, at animi ea doloremque, quasi libero odit cum eos!
          Culpa optio sunt nesciunt esse dolorum, iste eaque quia, vitae debitis aut animi laborum expedita vel aperiam, impedit dolores? Qui ullam labore quo molestias, ipsam corporis porro deserunt expedita voluptas?
          Ut aliquam quaerat veritatis, nam quisquam voluptate deleniti animi amet voluptas soluta tempora esse incidunt atque officia sunt delectus repellat quo. Ea veritatis cupiditate amet soluta aperiam accusamus ad voluptatem.
          Vero qui dicta pariatur voluptatem mollitia consectetur consequuntur molestiae libero repellat laborum? Ullam optio harum porro dignissimos aperiam. Non vero iste quos nulla temporibus doloribus maiores ullam facere quisquam aliquid?
          Harum eum, error aut itaque, soluta atque commodi illum tenetur impedit accusamus ducimus repellendus fuga quisquam nobis, explicabo incidunt corrupti quidem labore necessitatibus! Earum dolor vero tempora omnis explicabo totam?
          Soluta laborum ipsa temporibus fugiat facilis doloribus vel, laudantium ad error itaque architecto distinctio earum, voluptatibus beatae iusto! Expedita, repellat possimus eveniet vel error quam fuga voluptates quaerat dignissimos earum.
          Molestias, quas quis atque cumque perspiciatis itaque cupiditate dolorem, veritatis illo dicta voluptate exercitationem ad sapiente alias incidunt deserunt, dignissimos porro impedit? Maiores soluta praesentium quo accusamus enim architecto sunt.
          Consequuntur exercitationem delectus perspiciatis ex consectetur natus nam dolores. Tempore illo fugit quaerat, facilis ea perferendis atque omnis suscipit placeat quis, velit eaque veritatis expedita dolor nam aperiam culpa voluptatum.
          Accusamus ducimus perspiciatis ipsum fugiat! Incidunt, aperiam. Inventore sequi error nesciunt. Quo, rem unde aspernatur error ab repellat minima dicta blanditiis rerum nostrum. Natus ipsum iste itaque voluptas consectetur maiores.
          Sed eaque repudiandae illo, ullam aperiam eius error iusto consequatur ut non, velit, dignissimos nam tenetur similique saepe nemo eos magnam porro! Ut aspernatur sit nam, unde tenetur natus dolore?
          Repellendus, voluptatem. In exercitationem, iure quae nam blanditiis vero incidunt alias. Ut ad esse accusamus totam nesciunt? Tempore possimus impedit doloremque? Deserunt iste expedita fuga praesentium mollitia suscipit dignissimos ad!
          Soluta, assumenda ad aspernatur iure esse id numquam facere ex quidem officiis, minus totam repudiandae sequi voluptate. Aliquam, atque dignissimos inventore, exercitationem laudantium facere adipisci ipsa suscipit laborum at nemo.
          Commodi, alias velit. Non consequuntur at dignissimos nesciunt similique veritatis optio, earum odit obcaecati pariatur sunt modi cupiditate, libero excepturi, et aperiam hic alias reiciendis? Tenetur modi ipsam quos veritatis.
          Optio ullam dolorem adipisci provident voluptatum laborum similique officia sed, odit, dolor a odio hic. Asperiores numquam iste ex consectetur? Magni mollitia quas reprehenderit fuga, vel iste quam alias quod!
          Laboriosam quod beatae, unde quidem ipsa, autem nobis consectetur iure excepturi porro minus. Eum qui aliquam ut quas? Modi reiciendis consequatur illo impedit quaerat necessitatibus vero deleniti praesentium magni architecto.
          Molestiae officia reiciendis cumque inventore distinctio est optio enim maxime tempore corporis repellendus modi eligendi vitae eveniet rerum ducimus earum deserunt iste facere, soluta temporibus molestias nam. Accusantium, error eos.
          Pariatur, molestias magnam est ipsa blanditiis qui voluptas ducimus sit incidunt nesciunt inventore rerum corrupti laudantium debitis, possimus dolores iusto ab soluta. Accusamus minus totam velit consequatur possimus neque fugiat!
          Unde optio animi dolorem eveniet voluptas quaerat blanditiis, fuga praesentium illo id quas labore impedit ad? Porro dicta voluptatibus, repellat harum in reprehenderit suscipit voluptas nobis odio, blanditiis vel delectus?
          Corrupti voluptatem sit modi praesentium. Itaque reiciendis, impedit harum omnis quis aperiam error, autem similique aliquid deserunt repudiandae sunt id quaerat recusandae laborum laudantium illo repellat sequi et explicabo quasi!
          Adipisci unde temporibus cupiditate magni obcaecati ratione, itaque quae dolor necessitatibus quidem, facere quo? Ducimus nisi non, quas voluptas quos facilis! At eius eos omnis iusto dolor exercitationem suscipit in!
          Doloribus esse deserunt incidunt sapiente explicabo ea ex ipsam non et odio deleniti assumenda quos quam, nemo, consectetur maiores fugit! Eaque facere delectus odit ipsum perferendis dolores optio repellat ab.
          Est facilis ipsa perspiciatis tempore. Atque nemo praesentium provident temporibus, nesciunt nulla iusto in explicabo quae, pariatur eius enim. Commodi blanditiis magnam placeat amet explicabo magni qui quod beatae culpa!
          Velit molestiae cum repellendus necessitatibus et. Delectus ipsum, amet, excepturi expedita sed, ipsam minus quod autem consectetur quo reiciendis cumque iste repudiandae? Maiores, nobis? Provident est atque voluptates necessitatibus perspiciatis.
          Quidem fugit obcaecati ex ipsa sit sapiente libero assumenda explicabo officiis architecto amet veniam, quos nesciunt! Hic recusandae architecto natus obcaecati, vitae numquam quod qui magni est molestiae voluptate maxime!
          Aliquid, aspernatur possimus? Deserunt quisquam iste laborum pariatur autem libero, unde corrupti inventore sunt natus aperiam numquam, adipisci soluta repellat quod dolorem placeat rerum facilis quos voluptatibus voluptatem reprehenderit laboriosam.</p>
        </div>
      </NavTabsWrapper>
      <NavTabsWrapper
        sectionOrder={2}
        tabOffset={getNavTabPosition(1)}
        tabColor='rgba(9,9,121,1)'
        anchor={anchor[1]}
        sectionRef={secondSection}
        contentFixed={tabFixed.secondSection}
        tabFixed={tabFixed.secondSection}>
        <div style={{
          height: '100%',
          width: '100%',
          overflowY: tabFixed.secondSection  && !tabFixed.thirdSection ? 'scroll' : 'unset',
          background: 'linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 0%, rgba(0,212,255,1) 100%)'
        }}>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil quibusdam possimus nulla exercitationem tempora quis et? Id hic cum molestias deleniti harum aliquam quibusdam repellat modi. Voluptas accusamus ducimus facere?
          Dolorem quasi, cumque nihil sint assumenda earum. Laudantium doloremque obcaecati nesciunt, ex non labore cupiditate maxime facilis, repellat quia sunt eius placeat, veritatis quas. Eaque pariatur similique porro est molestiae.
          Magni ab impedit, expedita explicabo at necessitatibus. Aliquid laudantium magni qui harum aut. Nemo, minus facilis. Facilis, odio dolor. Consequatur perspiciatis a officia suscipit vitae consequuntur tempore, porro hic enim.
          Temporibus provident, minus dolorum animi neque architecto? Doloribus reprehenderit accusantium exercitationem quasi unde eius soluta officiis enim quaerat eaque magnam, quos autem nulla vitae pariatur explicabo ducimus neque dolores. Ea?
          Vel doloremque distinctio molestias quod aliquid molestiae consectetur! Dolor aliquid asperiores numquam quo reiciendis ipsa, dolores enim fugit debitis minima. Itaque distinctio dicta suscipit ea aliquid, minus debitis quas aut.
          Dignissimos nemo maxime enim aspernatur qui! Exercitationem sint provident atque enim, tenetur aliquam praesentium ea neque maiores, amet dicta dolorem recusandae minima eius beatae itaque aut doloribus ut ipsa quidem!
          Ipsam eveniet amet eligendi dolore alias totam aliquam ducimus, et ad autem voluptatibus est! Deserunt delectus quos provident amet ipsam! Fugit ea voluptas quam doloribus! Inventore ducimus laboriosam est nobis?
          Expedita atque ab illo velit blanditiis nostrum, ullam explicabo eos rerum reiciendis accusamus quis porro mollitia repellat fugit dolor inventore necessitatibus consectetur, et vel ipsa repellendus corrupti alias quae! Reprehenderit.
          Quos ducimus officia beatae corrupti ex atque blanditiis explicabo impedit ab, dolores nesciunt laudantium assumenda illum quibusdam deleniti. Modi, cumque. Deleniti culpa, provident eveniet placeat atque asperiores autem necessitatibus mollitia.
          Ducimus, illo. In iure totam quia unde sit eveniet praesentium inventore laudantium consequatur, magnam iusto expedita molestiae ipsa velit reiciendis sed aspernatur magni nemo omnis modi. Sequi, dignissimos. Voluptatibus, sint?
          Temporibus assumenda similique error autem? Incidunt minus commodi voluptas delectus omnis quas iusto asperiores esse distinctio, nulla nobis quia ducimus repudiandae aspernatur ut consectetur sint labore excepturi! Incidunt, quasi autem?
          Perferendis temporibus porro hic dignissimos deleniti explicabo est et, aperiam ab possimus, maxime, iure aliquid. Minus officia iste fugit a facere laboriosam libero adipisci, velit ipsum, asperiores corrupti vel? Maxime.
          Rerum illum officiis, numquam cum odit excepturi ab quo accusamus, facilis vitae obcaecati recusandae iure totam asperiores illo. Ratione velit non ipsum ad saepe suscipit nam praesentium distinctio quasi voluptate?
          Necessitatibus et, qui porro tempore natus ad. Quis, earum placeat odio, vero rem assumenda tempore aliquid, facilis maxime delectus possimus recusandae veniam. Qui perferendis sed optio, iusto repellendus enim sit.
          Possimus saepe optio minima non quos repudiandae veniam cumque quo qui tenetur, dolore soluta ipsa molestias nihil amet mollitia aspernatur reiciendis provident fugit nam inventore. Ducimus explicabo vel ab repellat.
          Animi quis, sapiente numquam minus dolorum nesciunt officia, impedit laudantium, possimus molestiae vero earum iure culpa consectetur mollitia asperiores non. Doloribus ad sed maiores ipsum nam dolor laudantium quas deserunt!
          Inventore tempore voluptatibus tenetur necessitatibus, numquam voluptate debitis mollitia eveniet fuga. Esse earum magnam consectetur quae sed aperiam dolores corrupti omnis tempora provident placeat totam, animi ab hic beatae eum!
          Doloremque pariatur ad dolorem deserunt at ducimus dignissimos. Hic soluta ea laborum cum dolores iste rerum, distinctio explicabo dicta quia eligendi mollitia labore nemo quasi architecto, libero, laudantium nobis assumenda.
          Modi dicta hic voluptates sint sapiente officia sed nemo nobis corporis repellat, sit saepe. Culpa aperiam exercitationem quae. Officiis doloremque iste aspernatur cupiditate expedita eum quasi modi quaerat natus quos!
          Et perferendis, nam molestias eum corporis repudiandae maxime est, odit officiis reiciendis aspernatur sunt, consequuntur obcaecati! Officiis voluptate sequi quia. Id dicta illum odit quis corporis, ea veritatis voluptas voluptate.
          Accusamus dicta eveniet ab, fugit dolorem repellendus pariatur. Sit, ut rerum consequuntur eius, in ipsum explicabo exercitationem ratione est libero illo eaque eos quasi ex vel, odit doloribus doloremque assumenda.
          Quod deserunt, at illum tempora praesentium mollitia, incidunt, esse impedit sed delectus sunt rerum neque quibusdam nam voluptates maxime dicta dolores! Nam, quos facilis! Aliquam obcaecati pariatur similique corporis voluptate!
          Adipisci modi iure tempore recusandae cupiditate vitae quidem sit exercitationem temporibus inventore, sed odit quas. Voluptatibus nesciunt, nam architecto expedita adipisci non maiores sed ipsa ducimus quo ad nisi nostrum?
          Nemo ad autem ipsa nostrum ut, nobis fugiat sit necessitatibus perferendis unde earum neque id illo veniam quae modi amet dolor rerum! Ullam necessitatibus adipisci commodi praesentium. Corporis, minima obcaecati.
          Animi dolorem iste commodi sunt voluptatibus sapiente cupiditate sed recusandae, cumque, aperiam sint blanditiis? Molestiae mollitia voluptatum veritatis quis cum eius, reiciendis consequuntur. Quia cupiditate aperiam necessitatibus dicta molestias libero.
          Quas delectus sequi illo quaerat facilis distinctio provident architecto, commodi tempore quisquam error inventore dolore minus nulla veritatis autem. Fugiat saepe molestiae, voluptatem mollitia sit exercitationem molestias voluptates rem ut!
          Corrupti quo et, error itaque nisi temporibus animi praesentium adipisci sunt, odio qui alias tenetur dolorum voluptatum non deleniti quis totam, magnam sit quaerat illum ab. Accusantium neque iusto pariatur!
          Laborum inventore optio unde amet ut, saepe minus quam rem sint, dolorem tempora accusantium porro expedita voluptatibus! Minus, labore placeat quae modi, non maiores veniam eius praesentium nobis inventore esse?
          Commodi vero nemo sit odit necessitatibus beatae delectus laudantium, harum veniam, porro ab explicabo ipsam quasi earum. Ut accusantium porro, enim dolores illum distinctio rem, magni est reprehenderit laborum sapiente!
          Error repellat quasi quae in nostrum praesentium nemo iste atque impedit dolor. Consequatur veritatis porro reprehenderit dolor expedita animi corporis sint distinctio, aspernatur ipsa voluptas, eveniet, temporibus officiis illum? Itaque.
          Nesciunt doloremque exercitationem, repellat obcaecati asperiores ad neque quam eum illo aspernatur provident temporibus sed porro minima corrupti similique iste labore quibusdam tempore nobis enim officia aliquam quasi deserunt. Dicta.
          Nihil possimus officia expedita iste harum commodi amet temporibus, inventore soluta beatae porro sint consequatur ut. Amet perspiciatis ratione perferendis minus, ab possimus quibusdam quas nostrum voluptates aspernatur, commodi repellat.
          Esse impedit libero totam maxime porro, at, tenetur optio mollitia commodi corporis beatae cupiditate accusantium voluptates est, perferendis quasi quod officia quibusdam aliquam assumenda consequuntur placeat ab. Iusto, debitis sint!
          Debitis illo nostrum possimus molestiae velit mollitia et, voluptates esse ducimus voluptas fugit sit quasi fugiat, natus ea nesciunt rerum odit. Possimus cumque porro pariatur repudiandae sed ea laudantium itaque!
          Mollitia debitis fugit exercitationem, aperiam quisquam ullam quaerat et, officiis odit doloribus molestiae. Modi reprehenderit incidunt porro? Voluptate mollitia dolorum quo eaque laudantium ad? Recusandae dolore unde harum nemo possimus.
          Fugit quasi earum delectus ipsam, voluptates cumque officiis alias beatae sequi ab sapiente placeat labore, magni ratione enim recusandae, animi vel? Consectetur, repudiandae quae non accusamus ipsum libero delectus ab.
          Numquam illum, temporibus unde sunt ut alias laboriosam, magnam nulla tempora pariatur illo odio dolores ducimus perspiciatis nostrum officia eos perferendis quaerat minus totam? Modi magnam nobis quam expedita ducimus?
          Tempore praesentium voluptate dolore delectus iste odio laborum amet quos ut. Accusamus saepe nihil, odit esse quam maxime, facere architecto distinctio delectus quod voluptates fugit necessitatibus vel explicabo mollitia itaque.
          Dolore alias maxime quas accusantium ipsam cum quis numquam natus ut at possimus omnis vel consequatur, odio facilis voluptate quod aut saepe delectus totam iure. Voluptatem eaque laudantium at reprehenderit.
          Praesentium officiis eveniet soluta! Quisquam, cumque mollitia. Eveniet ullam quod maxime accusamus aspernatur, commodi deserunt natus a suscipit hic. Nihil in explicabo id necessitatibus nisi velit reiciendis eaque eveniet? Laboriosam?
          Facere culpa architecto quos tempore aliquid nemo quis minus ut vero, quibusdam consequatur consectetur numquam. Voluptatibus corporis nihil distinctio quo velit suscipit aut non voluptate aliquam repellendus, sequi doloribus! Quaerat.
          Voluptatum eos possimus ut. Voluptate ratione saepe maiores, officiis magnam aut, tempore dolorum rerum quisquam cumque reiciendis amet aperiam culpa ullam laudantium aliquam alias cupiditate vel qui quod eum. Cumque.
          Culpa tempora magni sint? Voluptatibus consequatur harum dolores rem deleniti itaque possimus nisi tempore magnam quia fugit nesciunt iure, tempora soluta exercitationem velit libero unde quam odit repellat expedita tenetur.
          Laudantium, illo ab ipsa debitis sit tenetur sequi nam est odio quaerat a velit eum animi, laboriosam quod quidem distinctio laborum placeat repellat. Commodi qui tempora corporis. Cumque, rem voluptas.
          Minus accusantium nemo cumque mollitia, quae nesciunt iusto beatae alias qui vero. A aliquam iste consectetur. Odit, beatae esse numquam dolorem suscipit sit quod aspernatur, voluptas quidem blanditiis, aut iure.
          Voluptas, est modi necessitatibus magnam, minus perferendis impedit repellendus voluptate ducimus nisi corrupti harum, enim fugit quidem delectus ab incidunt! Quia eaque assumenda aperiam voluptate, saepe laudantium nam sunt voluptatum.
          Minima consequatur impedit autem ex dolores nulla labore dicta quidem sint est praesentium pariatur minus nostrum ad possimus rem, molestiae ducimus iste ab accusamus ipsum qui fugiat odio distinctio. Eligendi?
          Nam eaque earum nihil ducimus eveniet, soluta itaque rerum! Dolore voluptate iusto quasi sed velit expedita cum, similique voluptates, exercitationem nam, quia eaque mollitia fugiat obcaecati? Repellat ex ea aliquam!
          Minima ipsam esse id totam facilis? Consequatur iste in sed quisquam doloribus ea sapiente assumenda praesentium facilis molestias. Iste quos totam ea quae, quaerat repellat sequi harum magnam sapiente eum?
          Enim, consequatur. Voluptate sunt atque dolore sint cum sit rem perspiciatis vero eveniet illo quos, officiis saepe placeat animi porro vel mollitia. Nostrum harum iusto suscipit reiciendis quidem earum est.
          Quaerat tempore ipsa reiciendis soluta molestiae, a, similique excepturi sit commodi earum omnis ad placeat voluptas accusamus dignissimos modi dolorem, tempora velit eveniet animi aperiam? Aspernatur temporibus eaque a obcaecati!
          Fugit ex perferendis nobis magni inventore numquam architecto id quam eaque at quasi temporibus est nulla quos eveniet ut provident culpa sunt, quidem deleniti rem quibusdam? Reiciendis consectetur dolorem rerum.
          Doloribus distinctio reiciendis vitae modi dolor minima alias tenetur soluta eum, aperiam, ut placeat quod beatae suscipit repellat veniam, aliquid est porro. Eaque, laudantium a ratione provident rem quas culpa.
          Facilis iste quos porro similique hic eveniet ullam nihil exercitationem, temporibus unde odio nobis modi voluptatum delectus pariatur possimus laudantium ut atque rerum quam sunt quasi voluptas molestiae tenetur! Repellat.
          Fuga delectus odio vero laboriosam. Ducimus fugiat repellat recusandae harum blanditiis ullam sapiente, laboriosam debitis dicta voluptate quasi quod molestiae enim esse, maiores deserunt vitae quidem, alias sed dolorem incidunt!
          Aspernatur ut explicabo nemo, esse, similique fugiat possimus delectus veritatis rem facilis deserunt reprehenderit accusantium omnis repudiandae numquam unde nisi eos libero consequatur praesentium quasi. Error sit nesciunt nisi corporis?
          Temporibus totam in doloremque expedita repellendus facilis accusantium minima at est, voluptatum perferendis, necessitatibus soluta? Dolorum maxime nam necessitatibus numquam impedit blanditiis incidunt. Iure pariatur voluptatibus ex laborum optio dignissimos?
          Perspiciatis quibusdam ut ipsum molestias vel autem velit sit omnis delectus earum. Perferendis minima voluptas ex ea ipsa ab suscipit veritatis nihil deleniti amet repellat, non nisi repudiandae, veniam sed?
          Corrupti debitis labore, quasi delectus sed sunt minima. Animi esse quisquam facilis magnam vitae laborum sunt, aut quia rem perspiciatis dolorem fugiat praesentium laudantium maiores ut! Voluptate deleniti officiis labore.
          Odio porro repellat animi optio totam doloremque vero quidem illo cum quis, in id natus voluptatum repudiandae fugiat. Illo quam esse quasi dolorum expedita porro a eos fugit beatae nesciunt!
          Voluptate dolores reiciendis tempora, doloremque assumenda quam ipsa placeat aliquam quas vero iusto autem, praesentium a magnam fuga labore maxime velit voluptatem doloribus. Harum sit omnis sed impedit. Facere, perspiciatis.
          Quasi, odio animi? Nisi officia atque, id cum sint perspiciatis praesentium debitis eum dolor aspernatur nemo deleniti nostrum ex enim provident quasi quae odio fugiat! Odio ea ut laudantium ipsa!
          Explicabo vel magni natus quis excepturi in maxime. Est et soluta, unde incidunt maiores, itaque architecto at aliquam debitis sunt ex beatae molestias, nam pariatur voluptate minima dolorum rem vitae.
          Voluptates, quisquam repudiandae laborum perferendis unde vero maiores illo magni voluptatum autem facilis ducimus neque eligendi, iure magnam placeat voluptatem quibusdam repellat alias odio! Autem modi quaerat totam! Dolor, cumque.
          Reprehenderit a nihil unde nulla corporis, sit temporibus minus ad nesciunt! Architecto rerum ipsam dolorem, itaque iure ab quos sit nulla velit magni saepe hic? Temporibus ex ad qui nesciunt.
          Veritatis magnam iure recusandae alias accusamus? Aperiam voluptates rem, accusantium sunt impedit asperiores explicabo unde fugit debitis repellat distinctio ut. Dolorem numquam voluptate sequi cum aspernatur repellat voluptates est nulla.
          Nihil quam possimus quasi. Nostrum incidunt assumenda doloribus facere, tempore dolorem natus aliquam maxime eaque excepturi quam aperiam quos tenetur id numquam sint consequuntur voluptatibus, magnam quae, quasi aspernatur ea!
          In, aliquam aperiam sint ipsa nam assumenda debitis iste illo corporis? Laboriosam inventore nemo unde eos consequuntur, error recusandae deserunt minus rem asperiores libero maiores alias aspernatur illo? Deserunt, provident!
          Maiores ad dolor beatae explicabo omnis? Non corporis natus sequi quisquam quas commodi tempore distinctio, explicabo vitae iste quasi delectus deleniti, expedita soluta esse, hic dicta quaerat illum nesciunt necessitatibus!
          Deleniti modi ea eum natus perspiciatis assumenda, repudiandae atque maiores blanditiis adipisci eligendi ad esse ducimus minus cupiditate nisi exercitationem. Tempore eligendi in maxime ipsam iusto dolor itaque expedita vero.
          Natus repellat perferendis explicabo, nesciunt perspiciatis deleniti corrupti consequatur ipsum impedit officiis similique delectus iste quisquam earum non amet repellendus veniam. Accusantium earum quod delectus blanditiis rem? Doloribus, suscipit tenetur.
          Repellendus id unde rerum eaque tempora et fugit obcaecati ad laboriosam. Maxime aspernatur, a numquam deserunt maiores nihil reiciendis quos nostrum aliquid consequuntur ex dolorem placeat consequatur magnam odit mollitia!
          Officia nulla ratione enim ipsum magni quis suscipit ab atque? Ut rerum placeat, cum corrupti ex eius ratione necessitatibus facilis earum beatae eum, non amet, totam reprehenderit nesciunt. Quidem, est?
          Quaerat repudiandae et sunt facilis maxime tempore, iure autem maiores adipisci ipsa assumenda nesciunt dolor dicta rem suscipit molestiae nostrum animi cum nulla illo ea quia enim. Minima, rem nam.
          Aspernatur, totam ducimus! Amet nesciunt sint non animi praesentium eaque libero, sunt facere aspernatur laudantium optio mollitia cupiditate et debitis saepe harum vero ea. Neque expedita libero illum eius tempore.
          Dolor distinctio impedit, harum ut, similique nisi atque, quasi corrupti asperiores reprehenderit quo! Quisquam perspiciatis veritatis deserunt reprehenderit excepturi explicabo possimus doloribus ab. Dolore nemo repellat omnis, maiores est reprehenderit.
          Sunt sint corporis libero qui omnis nihil pariatur ipsum eum quam ratione magni aperiam facere consequatur at possimus quae repellendus sit, rerum unde assumenda. Sed magnam quia illum consectetur dolorum.
          Quas incidunt culpa harum velit dolorum odit repudiandae qui molestiae possimus sapiente. Sunt maxime corrupti atque architecto est a pariatur asperiores, nulla ipsa sapiente illo ab ut veniam dignissimos cum.
          Soluta nemo facilis, dolores officiis quia earum molestiae odio cum aliquam, ipsum deserunt possimus. Officia magnam veniam nisi! Voluptatum quibusdam soluta sit quidem repellat modi laboriosam provident laborum illo. Dolor?
          Laudantium vel corrupti perspiciatis aspernatur et error necessitatibus possimus dolorem eos rem quia quam a ullam dolores soluta atque voluptatibus, minus in hic id aliquam cum laboriosam expedita fugit. Placeat?
          Mollitia enim pariatur error. Saepe, reiciendis. Rerum ad cum atque autem fugit omnis quisquam aperiam sit ipsam sint dolorum molestias explicabo facere, est iste iusto ullam officia quos cumque perferendis.
          Hic voluptatum numquam omnis voluptatem id, nihil delectus culpa ratione, voluptate animi quae reprehenderit necessitatibus impedit aut? Eos veniam ut, rem tempore doloremque debitis odio consequatur. Culpa eaque nemo tempore.
          Iure quasi adipisci eveniet libero beatae. Quae illum dolores sunt nam aperiam impedit facilis perferendis ad quia rem, ipsa quos ex ea, laudantium distinctio consequatur sit voluptatem? Quam, adipisci sed?
          Maxime, quas delectus. Nemo exercitationem, unde quo animi nihil magnam culpa ipsa saepe blanditiis dolor et nisi dignissimos reprehenderit dolorem. Repudiandae tempore recusandae ipsa ullam, possimus quis ad nam excepturi.
          Pariatur, odio aperiam dolor accusantium recusandae suscipit voluptatem exercitationem perspiciatis. Excepturi ea voluptatibus quis soluta doloremque aliquam magnam vitae tenetur laborum eveniet animi sed repellendus provident velit rem, iusto quos?
          Esse possimus illo enim fugiat nisi asperiores omnis aliquid libero, ipsam culpa fuga inventore similique odit aut et, harum assumenda quae natus odio illum aspernatur perspiciatis, voluptas quia? Dolores, quia.
          Quia saepe voluptate, quidem quibusdam neque alias, corrupti provident veritatis excepturi dolorum porro enim. Repudiandae tenetur esse voluptates quam sequi qui nihil dignissimos? Assumenda nihil nam asperiores hic nobis distinctio.
          Alias, ut vitae. Exercitationem laborum provident iure illum aspernatur explicabo dolore, sunt minus maiores perferendis mollitia debitis nobis nesciunt vitae aperiam quidem repudiandae odit quasi, perspiciatis enim nostrum possimus soluta?
          Vitae odit, commodi cumque tempore, at repellat error numquam accusantium earum magni magnam animi vero saepe facilis ea deserunt ad nulla voluptatum sint perferendis, autem sequi! Eius repellendus placeat nam.
          Obcaecati facere quae atque nihil distinctio ullam porro doloremque recusandae suscipit eveniet, sequi ab ad. Expedita similique praesentium eligendi in, corporis non, quo rerum mollitia repellendus officia fuga itaque temporibus!
          Non libero consectetur quasi facilis soluta excepturi eum odio suscipit vitae quas, recusandae, quia sit assumenda dicta nihil dignissimos reprehenderit ducimus quae perspiciatis doloremque dolores, blanditiis quaerat! Recusandae, quibusdam similique!
          Perferendis praesentium, facilis officiis assumenda id aspernatur cum doloremque exercitationem pariatur minima quasi reiciendis laborum. Commodi, rerum impedit natus beatae vel doloremque dolore pariatur. Eos, veniam! Ipsum tempora alias dolorem.
          Vitae magnam voluptate doloremque incidunt. Corrupti asperiores dicta iure voluptate optio sequi illo explicabo veniam perspiciatis! Distinctio ducimus, quasi provident esse, perspiciatis repudiandae obcaecati dolor laudantium qui aperiam necessitatibus ad.
          Pariatur sed excepturi saepe, eligendi labore molestias quae tempora illum similique. Iste odio dignissimos corrupti libero tenetur expedita dolorem, aspernatur architecto soluta illum. Eligendi adipisci inventore deleniti aliquam beatae a.
          Corporis repellendus itaque atque, eligendi esse necessitatibus animi tempora aliquid, aperiam repellat sapiente excepturi incidunt facere deserunt? Veniam, repudiandae perspiciatis rerum qui enim culpa. Doloribus explicabo distinctio assumenda tempora exercitationem?
          Aut, adipisci vel velit accusantium sequi suscipit, odit nemo reiciendis dolorum nostrum amet. Incidunt dolores hic eius impedit optio in, eos voluptatibus aut est ad commodi aspernatur vero nostrum rem?
          Nam, facere veniam excepturi dicta sit velit quia placeat repudiandae aliquid sequi, ex nobis fugit quam impedit atque sapiente beatae, asperiores perferendis? Cupiditate asperiores aspernatur adipisci nostrum nihil, dolor necessitatibus.
          Architecto veniam soluta ad dignissimos facere minima illo id alias eum earum natus amet atque aperiam, tenetur, impedit maiores officia doloremque. Eius magni quod qui sit aperiam, consectetur illum explicabo?
          Nihil aliquid ipsam dignissimos recusandae. Optio veniam perferendis, beatae fugiat ipsum aspernatur aliquid autem, sequi quia unde eius quidem hic maxime quos ducimus tempore esse non placeat, saepe nihil sapiente?
          Quae suscipit libero accusamus maxime voluptate fugit odit iusto eius voluptatum earum sit eaque architecto laudantium voluptatibus aut ipsam unde tempora culpa, tenetur deserunt repellendus corporis. Libero labore laboriosam voluptas.</p>
        </div>
      </NavTabsWrapper>
      <NavTabsWrapper
        sectionOrder={3}
        tabColor='rgba(53,9,121,1)'
        tabOffset={getNavTabPosition(2)}
        anchor={anchor[2]}
        sectionRef={thirdSection}
        contentFixed={tabFixed.thirdSection}
        tabFixed={tabFixed.thirdSection}
      // overrideDimension={{marginBottom: 10}}
      >
        <div style={{
          height: '100%',
          width: '100%',
          overflowY: 'scroll',
          // background: 'linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(53,9,121,1) 0%, rgba(0,255,181,1) 100%)'
        }}>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae rerum hic esse nisi, deserunt accusamus quae dolor fuga cum amet quia error voluptate magni quo veritatis nostrum facilis? Reprehenderit, porro?
          Doloribus eos deleniti mollitia harum amet, tenetur facilis? Ea ratione eius deleniti, delectus aliquid repellat sed accusantium ex reprehenderit! Maiores consequuntur, ratione illum atque rem harum autem quidem blanditiis omnis!
          Quae recusandae, hic fuga libero ea esse explicabo obcaecati totam! Deserunt et, non laborum quae sunt nobis excepturi consectetur iusto odit laboriosam maiores nostrum ex, ipsum, veniam quam maxime eius?
          Et, incidunt modi suscipit ipsa pariatur laborum quaerat perferendis nostrum impedit esse tempore magni? Nemo aliquam est similique. Maxime facere labore ducimus magni voluptate assumenda possimus temporibus sequi neque tempora.
          Excepturi, quos exercitationem cupiditate architecto quis ipsa possimus minus alias sit maxime magni nemo modi quaerat temporibus repudiandae quisquam sapiente aperiam deserunt at ullam blanditiis totam reprehenderit nobis aliquid? Dolorem.
          Ex nostrum ut impedit quia est assumenda, similique rem velit esse illum repellendus aliquam sint doloribus. Soluta dolorum impedit porro vero, vel distinctio illo dignissimos at omnis harum voluptatem saepe!
          Maiores est officiis reprehenderit similique neque sit ipsum optio. Molestiae distinctio deleniti velit provident cum delectus dolores ad, consequatur blanditiis molestias. Ipsam eius cum consequuntur quo animi sequi nihil consectetur!
          Reiciendis eum quis, natus laboriosam quasi eveniet sed! Repudiandae, fuga? Provident sit inventore animi veritatis eaque fugit nisi, quisquam aut repellendus sint minima ratione rem hic aperiam tempora reprehenderit temporibus?
          Velit vitae quasi nulla ducimus quod quas illo laudantium quibusdam architecto, eum odio reiciendis sunt fugit non, officia culpa aliquid cumque. Provident, voluptas labore ab delectus corrupti soluta beatae! Nobis.
          Eaque quae totam sapiente consectetur ratione sunt blanditiis quaerat debitis voluptas soluta expedita rerum facere nesciunt eveniet, delectus quos praesentium tempora. Commodi et saepe nostrum incidunt fuga harum sunt numquam?
          Laboriosam magni nobis saepe eius, dicta pariatur sint repellat laudantium magnam, est esse, repellendus ratione harum illum praesentium ea nihil sed rerum ipsum quod delectus tempora! Vero odit est ratione.
          Obcaecati, delectus? Vitae aliquid, illum quo ea harum vel fuga quis animi dolore consequatur possimus dolor suscipit autem! Debitis pariatur delectus dicta laborum molestiae illum numquam non officia explicabo soluta!
          Eligendi, sunt est. Quas, ipsa ducimus cumque quo accusantium nemo. Eaque, consequuntur fugit asperiores quisquam accusamus dolorum libero voluptatibus. Distinctio soluta tenetur cumque vero, ipsa quos dolor perspiciatis modi eius!
          Repellendus quae possimus debitis optio, et vero quidem nisi beatae repellat autem, sunt voluptate commodi corporis voluptates? Impedit perspiciatis, tempora quaerat, iste rerum ea minus libero laboriosam minima, pariatur repellendus.
          Ipsum molestias ut pariatur illum quibusdam vel ab aliquam rerum soluta autem facere, voluptas inventore ad dolorum unde asperiores aspernatur sint, aliquid non alias odio voluptatem, exercitationem ex. Deleniti, corporis.
          Dicta eveniet, natus quae illo molestias fuga eaque sapiente ipsum dolor inventore nostrum hic debitis blanditiis assumenda cupiditate maiores quidem ut ipsam minima praesentium? Nostrum exercitationem itaque inventore officia maiores.
          Minima quo nobis, nihil minus nostrum, quod eum numquam molestias explicabo debitis perspiciatis consequuntur quibusdam eveniet doloribus nam laboriosam ipsa! Reiciendis cum, eos ex praesentium cumque laudantium accusamus! Dolor, quibusdam?
          Maxime quasi enim dolorum nulla dolores error ipsam deserunt quia soluta aut incidunt omnis quo velit harum eaque ullam a tenetur, doloremque obcaecati voluptatum atque rerum nihil voluptas. Dolorum, exercitationem.
          Quas quia repellendus voluptates harum excepturi, sint in nesciunt dignissimos a vel quam voluptas deserunt maiores molestias quis aut placeat fuga perferendis, expedita ipsam velit eveniet fugit autem. Repellat, quasi!
          Nemo enim excepturi optio aliquam blanditiis, dolore quasi est pariatur voluptate sint, harum inventore quam itaque doloremque nulla ad doloribus quia! Nisi non eveniet corrupti quae excepturi temporibus tempora cum?
          Quae temporibus impedit, architecto deserunt voluptatem quo aspernatur ab facere doloribus voluptates soluta quod autem unde qui libero necessitatibus quisquam eum iusto suscipit sequi! Dolor vitae recusandae exercitationem ipsam quisquam?
          Sint ratione esse sunt totam at commodi laudantium? Voluptatum atque consequuntur sequi? Possimus laboriosam quidem eveniet a quia beatae at debitis, tenetur, inventore placeat iste sit molestiae, deserunt necessitatibus. Numquam.
          Similique animi sint nihil eum rerum voluptas consequatur quaerat temporibus ea ab, aliquid corrupti repellendus voluptate officia quae perspiciatis porro fugit illum, nostrum excepturi placeat eveniet dignissimos. Magni, molestias cumque.
          Aliquid voluptatum eum placeat modi voluptas neque totam laboriosam et voluptate. Nisi in eius repellendus perspiciatis ad iste! Veritatis blanditiis id dolore maiores quia ratione omnis numquam quam iure cum.
          Dicta suscipit quis a laboriosam tempore tenetur vitae quo rem alias? Ipsum earum unde est aliquid tenetur, deleniti doloremque non expedita quidem ratione, autem perspiciatis? Quam exercitationem possimus esse optio.
          Praesentium quidem incidunt dolores. Veniam, minima eius? Nostrum voluptate modi consequatur at labore, ex ratione. Facere nostrum distinctio ullam nobis. Cupiditate impedit dicta qui repellat et reiciendis cumque quasi autem.
          Quis, a! Asperiores officia accusantium iusto maxime voluptate? Consequatur quam fugit, est quo obcaecati eveniet voluptatum iste alias, repellat blanditiis neque sed dolor laboriosam quis non tenetur modi provident assumenda?
          Sed expedita doloribus voluptates autem repellat dolore eum blanditiis nisi rerum nostrum dolores, amet fugit corporis ipsam dolor rem sapiente aliquid a tempora incidunt! Est reiciendis iste ducimus unde ipsa.
          Sit deleniti at ab, eos, voluptatem rem incidunt magnam explicabo sunt harum dolore provident consectetur quibusdam accusantium! Dolor, corporis? Architecto, possimus eaque quaerat quod distinctio doloremque vitae a debitis aperiam!
          Fuga officia eaque delectus, dolorum, accusamus inventore aperiam cumque voluptatibus incidunt numquam quia magnam iusto ipsum amet est. Possimus amet explicabo maxime ipsam et a maiores ullam totam itaque aliquam?
          Corrupti repellendus fugiat inventore error ea aut, veritatis esse ratione facilis molestias? Corrupti quam officiis mollitia vel ipsa laboriosam quas, quibusdam hic debitis cumque totam voluptatibus minima illum nihil sequi.
          Temporibus dicta perspiciatis neque nulla quae excepturi, provident voluptates! Iure libero rerum quam corporis, optio omnis perspiciatis deleniti quibusdam eius dignissimos sint repudiandae, sit molestias laborum amet quasi placeat nihil.
          Possimus quasi unde maiores blanditiis excepturi nisi pariatur facilis nostrum, cum a veniam, odit ea omnis id praesentium facere? Molestias doloribus voluptatibus delectus labore dolores magni harum inventore illum nihil!
          Blanditiis libero inventore amet, autem officiis odio hic aut, dolorum provident, neque quisquam. Placeat cumque officiis mollitia accusamus tempore, perferendis ducimus magni, facilis tempora adipisci nam explicabo saepe dolorem quam!
          Mollitia sapiente magni, nulla eius facilis vero molestiae, similique nemo repellendus temporibus optio beatae natus! Ducimus, quae est dolorum iure maxime, quidem quis debitis corporis incidunt in expedita minus veniam!
          Amet fuga incidunt optio explicabo obcaecati iste cumque doloribus, qui aliquam nostrum rerum recusandae, ut nisi fugit nam minima sequi doloremque maiores? Laudantium dolorum commodi excepturi, suscipit voluptas beatae ea!
          Non cum ratione molestiae vel aspernatur dolorem ex exercitationem, voluptas explicabo tempora eum beatae laudantium aliquid quisquam rem consectetur cupiditate obcaecati in, deserunt nostrum reprehenderit sint ea. Necessitatibus, suscipit. Blanditiis?
          Harum molestias quos, accusantium molestiae placeat, ducimus laborum dolorum, ut ipsa saepe aliquid minus impedit. Vero harum odio saepe quibusdam dolorem itaque, corporis quia nobis, non fugit consequuntur illo facilis.
          Voluptates in aliquid accusamus praesentium recusandae iste temporibus dolorum non. Nobis totam exercitationem mollitia! Corrupti ipsa ex expedita voluptate. Numquam laborum ipsa sequi facere minima atque nostrum magni, deleniti suscipit.
          Atque fugit rem, omnis reiciendis quaerat, qui minus mollitia eum recusandae itaque dolores quasi fuga est excepturi beatae sunt? Eligendi est totam perferendis maxime rerum vel temporibus inventore nihil nobis?
          Tempore aspernatur assumenda sapiente natus mollitia fugit repellendus consequuntur velit aliquam! Blanditiis explicabo eum ad neque praesentium doloremque. Veniam dolorem nostrum porro nesciunt quae! Ipsum voluptatibus eos alias assumenda in?
          Neque eum placeat nesciunt rem repellendus quasi perspiciatis aut quisquam dolore laboriosam, unde fugit et aperiam iure repellat possimus a deleniti voluptatum. Omnis assumenda voluptas et possimus nulla molestiae error.
          Exercitationem laboriosam quam cum voluptatum sit. Voluptates, et iure cupiditate dignissimos consectetur odit? Deleniti dicta hic omnis, soluta dolores culpa quisquam nihil neque iure harum commodi, veniam cumque similique placeat.
          Soluta deleniti quisquam perferendis facilis repellat, possimus sapiente! Esse aut nulla ex dolor labore rem dicta itaque, vero sapiente, veniam hic consectetur accusamus harum, debitis qui cum provident facere consequatur.
          Perspiciatis, maxime vitae. Iusto natus voluptatem corrupti, laboriosam velit debitis maiores voluptate expedita distinctio, possimus quia fugit nesciunt accusantium beatae sunt aperiam odio quo mollitia iure deserunt praesentium. Possimus, neque.
          Eligendi aliquid reprehenderit ea non dignissimos nulla ex magnam nihil at et culpa, tenetur quia reiciendis id adipisci sit odit, error veritatis? Fugiat laboriosam eos totam autem quaerat, impedit iure?
          Omnis aspernatur eum fugit tenetur, blanditiis quasi consequatur? Sint quisquam quas, optio rerum quos voluptatum temporibus, dolores alias recusandae corrupti cum. Ut quasi, nobis ad numquam officiis exercitationem illo ducimus!
          Consequuntur ex illum, beatae aut cum maxime molestiae nulla nihil! Dolor corporis ad laborum. Modi atque incidunt iusto perspiciatis, quasi ut necessitatibus vel, id aperiam commodi sapiente sint quibusdam a.
          Eum voluptate aperiam porro totam culpa quos natus quaerat necessitatibus repellat. Maiores aut eaque eius sunt blanditiis sit obcaecati provident, dolor officiis, nam ut temporibus saepe nostrum porro impedit at.
          Eligendi, adipisci dicta optio, blanditiis dignissimos aspernatur nobis cum debitis quo esse ex impedit deserunt dolorum laudantium itaque rem qui quia facilis? Provident dolor illum distinctio. Obcaecati, quasi! Facilis, nisi!
          Adipisci libero corrupti ipsum repellendus amet, laboriosam beatae similique, quisquam reprehenderit temporibus labore, minus provident explicabo est minima accusantium corporis officia illum asperiores alias quae hic? Nam incidunt minima velit.
          Error deserunt vero enim velit, ut unde voluptas rem, commodi iusto, dolorem rerum id? Doloremque, quam neque earum praesentium, corporis quo dicta, eveniet adipisci rerum accusantium quod voluptatum iste tempore!
          Ducimus repudiandae quasi perspiciatis possimus dolor explicabo numquam vero necessitatibus fugit corrupti itaque, saepe quod in error delectus tempore commodi eveniet officiis facere inventore ab. Iste aliquam voluptatibus animi ad!
          Delectus dicta possimus quia. In ab sed placeat vitae explicabo, corporis dolorem odio ipsam atque ea neque consequuntur amet iure. Rerum, dolorem. Maxime beatae alias exercitationem voluptatum, totam iusto iste?
          Minima in officia molestiae eligendi aut commodi autem libero sapiente. Omnis vel quibusdam quasi inventore, eligendi tempore nihil numquam. Accusantium quo cumque labore odio ex quisquam dicta eos assumenda neque.
          Eligendi quas facere maxime rem amet? Eligendi sunt minus laudantium perferendis, harum consectetur deserunt accusamus culpa eaque molestiae, dolorum praesentium provident at fugiat excepturi autem? Delectus nulla illum optio expedita!
          Quae placeat id vel, reprehenderit nulla magnam aspernatur dolorem fuga voluptatem inventore tenetur reiciendis illo, rerum ad consequatur sequi ex modi ea accusantium voluptate cum cumque voluptatum tempore. Aliquam, amet.
          Reprehenderit accusantium magnam nam possimus, eaque laboriosam officia veritatis sequi esse vitae, ratione, adipisci quod unde. Nemo nam modi odio corporis exercitationem, id quam beatae excepturi dignissimos, commodi, nihil distinctio?
          Necessitatibus non harum rerum quis dolores facilis deserunt possimus pariatur optio? Atque, culpa doloremque distinctio optio magni voluptatibus qui labore aperiam ipsum nihil corporis quidem iure consequuntur laboriosam architecto eligendi.
          Minus omnis, modi in repellat fugit quas eveniet impedit iste esse odit velit praesentium explicabo repellendus expedita minima at sint ut doloremque architecto ex, quam dicta. Quam saepe repellat ab!
          Accusantium cum placeat delectus consectetur unde veniam magni explicabo harum quis. Molestias numquam in quas optio sint laborum eos commodi nostrum sapiente repudiandae minima blanditiis nesciunt quod, laboriosam sed aut?
          Sapiente dolore id quo necessitatibus, tempora minus. Doloremque, blanditiis velit debitis labore libero dolorum commodi asperiores quisquam nihil laboriosam ex, temporibus obcaecati voluptate eum doloribus adipisci provident non, nam accusantium?
          Ex cumque voluptates, delectus porro id maxime dolorem vel harum. Iste illo sunt ut enim odit, corporis dicta ea fuga praesentium magnam magni, alias quod delectus excepturi eum debitis quae?
          Maxime, aliquam provident mollitia, reiciendis labore rerum harum iusto tempora voluptatum possimus dolorem quos, eos exercitationem libero cupiditate? Omnis, ducimus aut amet ratione odit molestiae distinctio ea quod modi saepe!
          Consectetur illo eligendi voluptate iste ullam dicta magnam aperiam ratione eaque voluptatibus, beatae voluptatem quos id atque facilis asperiores, cumque, eos laboriosam aliquid iusto veritatis temporibus facere fugiat numquam? Voluptatum.
          Doloremque placeat exercitationem sunt incidunt adipisci, eius tenetur iure rerum quia voluptatem earum fugiat facilis at optio? Voluptate tempora reprehenderit asperiores! Ea officia dolores itaque atque officiis impedit fugiat nostrum.
          Neque dicta sequi perferendis sint maxime provident! Architecto repellat aperiam esse deleniti, delectus aspernatur maiores eius, aut cumque corporis consequatur deserunt ad similique voluptate suscipit dolorem laboriosam molestias harum maxime?
          Nisi dolor ipsa cupiditate itaque obcaecati ab eius eaque, recusandae, perspiciatis doloribus et, saepe nemo consequatur molestias earum quod. Doloribus quis dicta maxime quidem rem odio aspernatur ullam. Numquam, vero?
          Quae magnam soluta repellat suscipit id excepturi pariatur illum voluptates! Dolores fugit impedit omnis quisquam ad minus, dignissimos in quo sequi eos quasi eligendi ut distinctio tempore illum dolorem repudiandae!
          Eos quisquam veniam, iure est nesciunt repellat qui tempora, soluta quidem ut, corporis incidunt omnis placeat unde libero quas sint dolorum. Soluta expedita earum, quisquam ducimus illo nobis rerum quibusdam.
          Corporis quidem autem ipsum, minus deserunt quas dignissimos eum deleniti tenetur maxime temporibus ipsa tempore excepturi voluptates veniam harum fugiat quisquam fuga pariatur necessitatibus blanditiis ad cum quo. Velit, cumque?
          Accusamus optio aliquam similique natus, nemo excepturi esse illum molestiae distinctio. Numquam, sint assumenda. Non, vel temporibus. Rerum quaerat autem quo temporibus? A sint obcaecati sunt cupiditate perspiciatis quisquam esse.
          Laudantium earum debitis asperiores rem modi consequatur. Modi earum mollitia, incidunt doloremque eveniet qui error dolor rerum sequi quod doloribus repellendus dicta ipsum maxime veniam asperiores porro reprehenderit eius dolorum.
          Enim tempora officia velit illo? Aperiam alias perferendis impedit laboriosam modi. Libero eligendi consequatur iste beatae. Itaque iure, mollitia cumque maiores, quis ipsa incidunt porro labore rem, laudantium accusamus! Hic!
          Ipsam, cupiditate dolorum, dolor at voluptatibus cum porro, eius culpa iste inventore corporis nesciunt. Dolores ratione soluta sint natus praesentium rem accusantium nam, aut, minima nemo corrupti quidem, cum ab.
          Aliquam quam harum dignissimos suscipit tempore nemo libero perferendis molestiae eaque praesentium nobis, nulla qui repellat vero culpa laudantium, voluptas, accusantium reprehenderit. Itaque, placeat incidunt repellat nulla inventore adipisci tempora?
          Dolores ipsa architecto quae amet hic incidunt et, deserunt reiciendis libero enim maxime sint rerum itaque officiis quod non recusandae aperiam quidem repellat ex expedita! Illo qui inventore odit iusto!
          Maxime quaerat ratione recusandae neque sapiente molestiae sunt et quae magni incidunt nulla cum, esse porro libero hic ad, quibusdam exercitationem mollitia praesentium delectus adipisci molestias possimus. Facilis, dolores dolorum!
          Tempore debitis fuga, reiciendis animi qui accusamus repellat aliquid corrupti sed minus blanditiis, corporis nobis, consequuntur numquam maxime. Nesciunt nihil molestiae cupiditate repudiandae maxime fugit possimus nulla at enim vitae?
          Repellat, facere? Quod ab illum earum! Explicabo, mollitia est esse ullam quasi optio sapiente tempora ipsam aliquid minus inventore iure ducimus. A, ex dicta iusto dignissimos numquam corrupti repudiandae sed.
          Nam, iste ullam! Accusantium vitae aut dolorum aperiam! Libero at magnam consectetur, rerum dignissimos commodi est incidunt, nihil nostrum earum excepturi! Eaque quaerat, aliquam necessitatibus et nobis alias consequatur minus?
          Fugiat vero sed voluptatibus nobis magnam maiores accusantium perspiciatis nesciunt, sint esse, iste dolore! Dolores, provident similique perferendis adipisci veniam labore doloremque tenetur pariatur voluptatem neque minus repellat. Ipsum, nesciunt?
          Similique nostrum iste esse inventore natus asperiores, ratione temporibus, ipsam adipisci impedit ea, ullam maxime ex harum expedita saepe assumenda quam necessitatibus porro reprehenderit consequuntur magni quos omnis voluptatum? Vero.
          Tempora quaerat corrupti enim aliquid laborum nostrum molestias. Ipsa temporibus unde, maxime facilis et voluptate ut debitis totam exercitationem ipsum incidunt, libero optio magnam doloremque animi eveniet consequuntur. Ullam, ipsam!
          Porro veritatis voluptas dolores. Beatae reprehenderit facere non aliquid ex fugit nisi nulla quisquam aut et. Debitis facilis labore amet ipsa quibusdam natus nostrum excepturi, quo saepe. Quia, animi id.
          Nisi deleniti impedit dolores nemo pariatur, veniam dicta ad distinctio deserunt eos ratione quidem laudantium tempora architecto nam, quae amet consequatur! Ab architecto accusamus mollitia. Officia repellat inventore reiciendis quasi.
          Magnam at quo laborum alias quia veniam perferendis ab! Ducimus dolorum aliquam veritatis qui omnis distinctio tempora. Blanditiis incidunt praesentium ipsam mollitia reprehenderit neque nam, inventore dolorum distinctio a nisi?
          Blanditiis libero architecto autem, officiis quaerat neque recusandae a ullam doloribus eius debitis unde quam error voluptatem dolore qui nobis porro exercitationem voluptatibus hic dolorum ad sint cupiditate. Quo, distinctio?
          Explicabo, impedit iste tenetur hic quas porro? Odit hic accusamus libero inventore ea nulla necessitatibus eaque quo, modi iusto. Ab nemo soluta tempora iusto reiciendis debitis perferendis natus voluptate vero.
          Ab, porro? Fuga laudantium placeat blanditiis accusamus minus quia ratione, nostrum quod dolorum molestias repellat quasi aliquid iure quae corrupti, excepturi ducimus sapiente reiciendis eius tempore distinctio nemo esse. Magni.
          Accusantium obcaecati ducimus aliquam quaerat, suscipit consequatur consectetur quod voluptates ratione. Est iusto eius molestiae eaque molestias aliquam eum quas, quae et, beatae perspiciatis nobis? Ea eum cupiditate enim quod!
          Deleniti vero quaerat officia sint aperiam quae labore, minus rem eius autem laboriosam accusantium facilis dolore, inventore explicabo consequuntur impedit molestiae. Perspiciatis facilis tempore quia aliquam sunt aut esse reiciendis?
          Impedit nesciunt officia ad nobis voluptatibus magnam sint nam deleniti suscipit eligendi esse accusantium nulla similique quos facilis unde, ipsa amet velit qui a. In ad laboriosam recusandae aut porro.
          Accusamus ullam vitae animi quibusdam distinctio eaque minima neque ipsam magnam. Molestiae natus sequi error provident autem ipsa nemo ut quod tempore ab quisquam enim facilis aut dolore, quae tempora!
          Doloribus, nisi voluptate totam quo commodi tenetur ipsa impedit illo rem, error dolores laboriosam quis nulla, doloremque facilis. Cumque hic deserunt possimus rerum facilis ad ab iure, officiis voluptate dicta?
          Tempora corrupti quo quibusdam dicta impedit deserunt excepturi, dolorem explicabo voluptatum iste eveniet perferendis fuga quod nostrum quam architecto aspernatur porro. Laboriosam nostrum officia ad, corrupti aliquid dignissimos quam perferendis?
          Temporibus ad vero, vel sequi earum a quas at. Saepe exercitationem officiis iste sed, earum, porro consequatur voluptate delectus numquam in illum autem minima. Sequi repellat laudantium eum quas esse.
          Nulla, corporis consequuntur laborum animi sit repellat tempora porro, nemo iste eum temporibus dolorem accusantium, itaque quisquam distinctio. Quisquam mollitia repudiandae, pariatur ipsam nobis laboriosam! Suscipit sapiente laudantium praesentium aspernatur!
          Modi odit voluptatum magni. Assumenda nihil nulla alias debitis earum molestias iure non rerum nemo beatae nam nostrum consequatur ullam culpa, mollitia cumque. Reprehenderit cupiditate, vitae quae optio magni minus?
          Impedit beatae delectus itaque, similique eum quae. Possimus pariatur aliquam officia ab nesciunt harum, molestias quis explicabo incidunt optio doloribus blanditiis quam repudiandae dolores tempore dolorem id veritatis? Debitis, labore.</p>

        </div>
      </NavTabsWrapper>
    </>
  );
}

export default App;
