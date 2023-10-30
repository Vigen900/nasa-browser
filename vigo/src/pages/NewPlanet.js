import { useTranslation } from 'react-i18next';
import {useForm} from 'react-hook-form';



export default function NewPlanet  () {
    const {t} = useTranslation();
    const {register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return <>
    <form  onSubmit={handleSubmit(onSubmit)}>
        <div className="tablePlanet">
            <p>{t('If_you_found_new_planet_you_can_add_it_to_our_directory')}</p>
            <div className='bar'>
                <input className='opt' {...register("planetName",{
                    required:{
                        value: true,
                        message: "Please enter the Planet Name!"
                    }
                })}  placeholder={t("PlanetName")}/>
                <div className='error'>
                {errors.planetName?.message}
                </div>
                <select placeholder={t('GalaxyName')} className='opt' {...register("galaxy", {
                    required:{
                        value: true,
                        message: "Please enter the Galaxy Name!"
                    }
                })} >
                    
                    <option value=''>select option</option>
                    <option value="30">Massier 83</option>
                    <option value="30">Black Eye Galaxy</option>
                    <option value="30">Pinwheel</option>
                    <option value="30">Canis Major Dwaf</option>
                    <option value="30">Mars</option>
                </select>
                <div className='error'>
                    {errors.galaxy?.message}
                </div>
                <input className='opt' {...register("diametr",{
                    required: "Please enter the Diametr!",
                    min:{
                        value: 50,
                        message:"min diametr 50"
                    },
                    max:{
                        value: 500,
                        message:"max diametr 500"
                    }
                })} placeholder={t("Diametr")}/>
                <div className='error'>
                    {errors.diametr?.message}
                </div>
                <input className='opt' {...register("distance",{
                    required: "Please enter the Distance!",
                    min:{
                        value: 1,
                        message:"min distance 1"
                    },
                    max:{
                        value: 100,
                        message:"max distance 100"
                    }
                })} placeholder={t("Distance_(mln_km)")}/>
                <div className='error'>
                    {errors.distance?.message}
                </div>
                <input className='opt' {...register("yourName",{
                    required:{
                        value: true,
                        message:"Please enter Your Name!"
                    }
                })} placeholder={t("YourName")}/>
                <div className='error'>
                    {errors.yourName?.message}
                </div>
                <input className='opt' {...register("email",{
                    required:{
                        value: true,
                        message:"Please enter Your Email!"
                    }
                })} placeholder={t("Email")}/>
                <div className='error'>
                    {errors.email?.message}
                </div>
                <button className='buttSub' {...register("sumbit")} type="sumbit">sumbit</button>
            </div>
        </div>
    </form>
    </>
}


