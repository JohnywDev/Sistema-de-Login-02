import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react';

export default function Login() {
  // Estados para guardar os textos digitados e mostrar/esconder a senha
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Função que roda quando o usuário clica em entrar
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Login feito com: ${email}`);
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
      {/* Caixa Branca do Formulário */}
      <div className="bg-white w-full max-w-md rounded-2xl p-8 shadow-2xl flex flex-col gap-6">
        
        {/* Cabeçalho */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Bem-vindo de volta</h1>
          <p className="text-slate-500 mt-2 text-sm">Insira seus dados para acessar a conta.</p>
        </div>

        {/* Botões de Redes Sociais */}
        <div className="grid grid-cols-2 gap-3">
          {/* Botão do Google com SVG Colorido Real */}
          <button type="button" className="flex items-center justify-center gap-2 border border-slate-200 py-2.5 rounded-xl hover:bg-slate-50 transition-colors font-medium text-sm text-slate-700">
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path
                fill="#EA4335"
                d="M5.266 9.765A7.077 7.077 0 0 1 12 4.909c1.69 0 3.218.6 4.418 1.582L19.91 3C17.782 1.145 15.055 0 12 0 7.33 0 3.313 2.686 1.34 6.618l3.926 3.147Z"
              />
              <path
                fill="#4285F4"
                d="M23.491 12.275c0-.796-.073-1.564-.205-2.305H12v4.355h6.441a5.503 5.503 0 0 1-2.386 3.614l3.691 2.864c2.159-1.99 3.405-4.918 3.405-8.528Z"
              />
              <path
                fill="#FBBC05"
                d="M5.266 14.235A7.149 7.149 0 0 1 4.909 12c0-.782.132-1.536.357-2.235L1.34 6.618A11.944 11.944 0 0 0 0 12c0 1.923.455 3.741 1.259 5.355l4.007-3.12Z"
              />
              <path
                fill="#34A853"
                d="M12 24c3.24 0 5.955-1.077 7.936-2.918l-3.69-2.864c-1.023.686-2.332 1.091-3.905 1.091-3.036 0-5.614-2.05-6.532-4.814l-4.007 3.12C3.313 21.314 7.33 24 12 24Z"
              />
            </svg>
            Google
          </button>
          
          {/* Botão do GitHub com SVG Oficial Real */}
          <button type="button" className="flex items-center justify-center gap-2 border border-slate-200 py-2.5 rounded-xl hover:bg-slate-50 transition-colors font-medium text-sm text-slate-700">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.061.069-.061 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
            GitHub
          </button>
        </div>

        {/* Divisor Visual */}
        <div className="flex items-center my-2 text-xs text-slate-400 uppercase font-semibold before:flex-1 before:border-t before:border-slate-200 before:mr-3 after:flex-1 after:border-t after:border-slate-200 after:ml-3">
          Ou continue com
        </div>

        {/* Formulário Principal */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          
          {/* Campo de Email */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-slate-700">Endereço de E-mail</label>
            <div className="relative">
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input 
                type="email" 
                required
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-11 pr-4 text-sm outline-none focus:border-indigo-600 focus:bg-white transition-all text-slate-800"
              />
            </div>
          </div>

          {/* Campo de Senha */}
          <div className="flex flex-col gap-1.5">
            <div className="flex justify-between items-center">
              <label className="text-sm font-semibold text-slate-700">Sua Senha</label>
              <a href="#" className="text-xs font-semibold text-indigo-600 hover:underline">Esqueceu a senha?</a>
            </div>
            <div className="relative">
              <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input 
                type={showPassword ? "text" : "password"} 
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-11 pr-11 text-sm outline-none focus:border-indigo-600 focus:bg-white transition-all text-slate-800"
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Botão de Enviar */}
          <button 
            type="submit"
            className="mt-2 w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-3 rounded-xl transition-colors flex items-center justify-center gap-2 text-sm shadow-md"
          >
            Entrar na Conta <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        {/* Link para Criar Conta */}
        <p className="text-center text-sm text-slate-500">
          Não tem uma conta? <a href="#" className="text-indigo-600 font-semibold hover:underline">Cadastre-se</a>
        </p>

      </div>
    </div>
  );
}