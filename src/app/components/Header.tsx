import logo from '../../../public/assets/logo.png'
import { Input } from './Input'

export const Header = ()=>{
    return (
        <header className="flex fixed justify-center top-0 right-0 w-full bg-white py-3">
            <nav className='mx-auto flex items-center justify-between  w-11/12 '>
                <section>
                    <a href="/">
                        <img className='w-36'
                            src={logo} alt="company" />
                    </a>
                </section>
                <section className='w-4/5'>                                
                    <Input />                    
                </section>
                <section>Carrinho</section>
            </nav>
        </header>
    )
}