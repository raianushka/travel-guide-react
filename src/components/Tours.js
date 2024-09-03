import Card from './Card.js'

function Tours({tours, removeTour}) {
    return(
            <div className='flex flex-col max-w-[1300px] mx-auto justify-center' >
                <div>
                <h2 className='font-bold border-8 m-[6vh] border-[rgb(1,7,160)] rounded-[20px] py-[1vh] px-[5vw] text-5xl'>Plan your trip</h2>
                </div>
                <div className='flex flex-wrap m-auto justify-center items-center'>
                         {
                       tours.map((tour)=>{
                        return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>
                       })
                }
             
                </div>
           
            </div>
        

    );
}

export default Tours;