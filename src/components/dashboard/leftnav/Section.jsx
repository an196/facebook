import ItemRow from './ItemRow'
import ViewMore from './ViewMore'

function Section({items, isfullItems,setFullItems, num}) {
  return (
    <ul className='max-w-[360px] flex flex-initial flex-col p-[12px]'>
    {
          !isfullItems ?
            items.slice(0, num).map((item, index) => (
              <ItemRow key={index} item={item} />
            ))
            :
            items.map((item, index) => (
              <ItemRow key={index} item={item} />
            ))
        }
         <ViewMore isViewmore={isfullItems} setViewmore={setFullItems} />
    </ul>
  )
}

export default Section