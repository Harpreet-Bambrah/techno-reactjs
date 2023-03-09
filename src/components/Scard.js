
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
const Scard = (props)=>{

    return(
            <>
                <div className="col-sm-6 col-lg-4 my-3">
                    <div className='text-center py-5 px-4 border border-1 bg-white '>
                        <div className='my-3 pt-2'><span style={{padding:'25px 12px', backgroundColor:'#0c5adb', color:'#ffffff', borderRadius:'35px'}}><AddBusinessIcon className='h1'/></span></div>
                        <div className='my-3 mt-4'>
                            <h4>{props.title}</h4>
                        </div>
                        <div className='my-3 pb-2'>
                            <p>
                            Whether bringing new amazing are products and services to market discovering new ways.
                            </p>
                        </div>
                    </div>
                </div>
            </>
    )
}

export default Scard;