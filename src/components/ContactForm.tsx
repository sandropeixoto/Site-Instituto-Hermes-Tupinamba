import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { useState } from 'react';
import { cn } from '../utils/cn';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    console.log('Form data:', data);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700 ml-1">Nome Completo</label>
          <input
            {...register('name', { required: 'Nome é obrigatório' })}
            className={cn(
              "w-full px-4 py-3 rounded-xl bg-white/50 border border-slate-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all",
              errors.name && "border-red-500 focus:ring-red-500/20"
            )}
            placeholder="Seu nome"
          />
          {errors.name && <p className="text-xs text-red-500 ml-1">{errors.name.message}</p>}
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700 ml-1">E-mail</label>
          <input
            {...register('email', { 
              required: 'E-mail é obrigatório',
              pattern: { value: /^\S+@\S+$/i, message: 'E-mail inválido' }
            })}
            className={cn(
              "w-full px-4 py-3 rounded-xl bg-white/50 border border-slate-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all",
              errors.email && "border-red-500 focus:ring-red-500/20"
            )}
            placeholder="seu@email.com"
          />
          {errors.email && <p className="text-xs text-red-500 ml-1">{errors.email.message}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-slate-700 ml-1">Assunto</label>
        <input
          {...register('subject', { required: 'Assunto é obrigatório' })}
          className={cn(
            "w-full px-4 py-3 rounded-xl bg-white/50 border border-slate-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all",
            errors.subject && "border-red-500 focus:ring-red-500/20"
          )}
          placeholder="Como podemos ajudar?"
        />
        {errors.subject && <p className="text-xs text-red-500 ml-1">{errors.subject.message}</p>}
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-slate-700 ml-1">Mensagem</label>
        <textarea
          {...register('message', { required: 'Mensagem é obrigatória' })}
          rows={5}
          className={cn(
            "w-full px-4 py-3 rounded-xl bg-white/50 border border-slate-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all resize-none",
            errors.message && "border-red-500 focus:ring-red-500/20"
          )}
          placeholder="Sua mensagem..."
        />
        {errors.message && <p className="text-xs text-red-500 ml-1">{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={cn(
          "w-full py-4 rounded-xl flex items-center justify-center gap-2 font-bold text-lg transition-all shadow-lg",
          isSuccess 
            ? "bg-green-500 text-white shadow-green-200" 
            : "bg-brand-blue text-white shadow-brand-blue/20 hover:bg-brand-blue/90 hover:scale-[1.02] active:scale-95 disabled:bg-slate-400"
        )}
      >
        {isSubmitting ? (
          <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        ) : isSuccess ? (
          "Mensagem Enviada!"
        ) : (
          <>
            Enviar Mensagem
            <Send size={20} strokeWidth={1.5} />
          </>
        )}
      </button>
    </form>
  );
}
