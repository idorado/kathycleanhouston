"use client"
import type React from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { addApplicationToNotion } from "./actions";

import {
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormField,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const translations = {
  en: {
    title: 'Work with Us',
    fullName: 'Full Name',
    phone: 'Cellphone (WhatsApp)',
    email: 'Email',
    address: 'Current Address (city and area)',
    ownCar: 'Do you have your own car?',
    yes: 'Yes',
    no: 'No',
    legalWork: 'Do you have legal permission to work in the US?',
    daysAvailable: 'What days/times can you work? (Check all that apply)',
    weekdays: 'Monday to Friday',
    weekends: 'Weekends',
    mornings: 'Mornings',
    afternoons: 'Afternoons',
    schedule: 'What is your schedule availability?',
    scheduleExample: 'E.g.: Monday to Friday 8am - 5pm, weekends, only nights, etc.',
    backgroundCheck: 'Are you willing to undergo a background check?',
    video: "Record a video about your experience and why you want to work at Kathy Clean Houston",
    submit: 'Submit',
    language: 'Language',
    uploading: 'Uploading...',
    uploadVideo: 'Upload Video',
    required: 'Required',
    source: 'How did you hear about us?',
    notes: 'Additional Notes (optional)',
    sourceOptions: {
      instagram: 'Instagram',
      facebook: 'Facebook',
      friend: 'A friend',
      other: 'Other',
    },
  },
  es: {
    title: 'Trabaja con Nosotros',
    fullName: 'Nombre completo',
    phone: 'Celular (WhatsApp)',
    email: 'Correo electrónico',
    address: 'Dirección actual (ciudad y zona)',
    ownCar: '¿Tienes auto propio?',
    yes: 'Sí',
    no: 'No',
    legalWork: '¿Tienes permiso para trabajar legalmente en EE. UU.?',
    daysAvailable: '¿Qué días y horarios puedes trabajar? (Marca todos los que puedas)',
    weekdays: 'Lunes a Viernes',
    weekends: 'Fines de semana',
    mornings: 'Mañanas',
    afternoons: 'Tardes',
    schedule: '¿Cuál es tu disponibilidad de horario?',
    scheduleExample: 'Ej: Lunes a Viernes 8am - 5pm, fines de semana, solo noches, etc.',
    backgroundCheck: '¿Estás dispuesto(a) a que te hagamos un background check?',
    video: "Graba un video contándonos sobre tus últimas experiencias y por qué te interesa trabajar en Kathy Clean Houston",
    submit: 'Enviar',
    language: 'Idioma',
    uploading: 'Subiendo...',
    uploadVideo: 'Subir video',
    required: 'Requerido',
    source: '¿Cómo te enteraste de nosotros?',
    notes: 'Notas adicionales (opcional)',
    sourceOptions: {
      instagram: 'Instagram',
      facebook: 'Facebook',
      friend: 'Un amigo',
      other: 'Otro',
    },
  },
};

export default function WorkWithUsPage() {
  const [lang, setLang] = useState<'en' | 'es'>('es');
  const t = translations[lang];
  const [uploading, setUploading] = useState(false);

  const WorkWithUsSchema = z.object({
  fullName: z.string().min(1, { message: "Required" }),
  phone: z.string().min(1, { message: "Required" }),
  email: z.string().email({ message: "Invalid email" }),
  address: z.string().min(1, { message: "Required" }),
  ownCar: z.enum(["yes", "no"], { required_error: "Required" }),
  legalWork: z.enum(["yes", "no"], { required_error: "Required" }),
  days: z.object({
    weekdays: z.boolean().refine(val => val === true, { message: "Select at least one option" }).or(z.literal(false)),
    weekends: z.boolean().or(z.literal(false)),
    mornings: z.boolean().or(z.literal(false)),
    afternoons: z.boolean().or(z.literal(false)),
  }).refine(
    d => d.weekdays || d.weekends || d.mornings || d.afternoons,
    { message: "Select at least one option" }
  ),
  schedule: z.string().min(1, { message: "Required" }),
  backgroundCheck: z.enum(["yes", "no"], { required_error: "Required" }),
  video: z.any().refine(file => file instanceof File, { message: "Required" }),
  source: z.array(z.string()).optional(),
  notes: z.string().optional(),
});

type WorkWithUsFormValues = z.infer<typeof WorkWithUsSchema>;

const form = useForm<WorkWithUsFormValues>({
  resolver: zodResolver(WorkWithUsSchema),
  defaultValues: {
    fullName: '',
    phone: '',
    email: '',
    address: '',
    ownCar: undefined,
    legalWork: undefined,
    days: {
      weekdays: false,
      weekends: false,
      mornings: false,
      afternoons: false,
    },
    schedule: '',
    backgroundCheck: undefined,
    video: undefined,
    source: [],
    notes: '',
  },
});

const onSubmit = async (data: WorkWithUsFormValues) => {
    setUploading(true);

    // The server action doesn't handle the file, so we omit it.
    // We can implement file uploads to a service like Vercel Blob or S3 later.

    const { video, ...applicationData } = data;
    const result = await addApplicationToNotion(applicationData);

    setUploading(false);

    if (result.success) {
      alert(lang === 'es' ? '¡Gracias! Tu aplicación ha sido enviada.' : 'Thank you! Your application has been submitted.');
      form.reset(); // Reset the form on successful submission.
    } else {
      // You can add more specific error handling here based on result.message
      alert(lang === 'es' ? 'Error al enviar. Por favor, intenta de nuevo.' : 'Submission failed. Please try again.');
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <div className="flex justify-end mb-4">
        <Label className="mr-2">{t.language}:</Label>
        <select value={lang} onChange={e => setLang(e.target.value as 'en' | 'es')} className="border rounded px-2 py-1">
          <option value="es">Español</option>
          <option value="en">English</option>
        </select>
      </div>
      <h1 className="text-2xl font-bold text-center mb-6">{t.title}</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <FormField
            name="fullName"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t.fullName} <span className="text-red-500">*</span></FormLabel>
                <FormControl>
                  <Input {...field} type="text" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="phone"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t.phone} <span className="text-red-500">*</span></FormLabel>
                <FormControl>
                  <Input {...field} type="tel" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="email"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t.email} <span className="text-red-500">*</span></FormLabel>
                <FormControl>
                  <Input {...field} type="email" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="address"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t.address} <span className="text-red-500">*</span></FormLabel>
                <FormControl>
                  <Input {...field} type="text" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="ownCar"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t.ownCar} <span className="text-red-500">*</span></FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    value={field.value}
                    className="flex gap-6"
                  >
                    <FormItem className="flex items-center space-x-2">
                      <FormControl>
                        <RadioGroupItem value="yes" />
                      </FormControl>
                      <FormLabel className="font-normal cursor-pointer">{t.yes}</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-2">
                      <FormControl>
                        <RadioGroupItem value="no" />
                      </FormControl>
                      <FormLabel className="font-normal cursor-pointer">{t.no}</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="legalWork"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t.legalWork} <span className="text-red-500">*</span></FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    value={field.value}
                    className="flex gap-6"
                  >
                    <FormItem className="flex items-center space-x-2">
                      <FormControl>
                        <RadioGroupItem value="yes" />
                      </FormControl>
                      <FormLabel className="font-normal cursor-pointer">{t.yes}</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-2">
                      <FormControl>
                        <RadioGroupItem value="no" />
                      </FormControl>
                      <FormLabel className="font-normal cursor-pointer">{t.no}</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div>
            <FormLabel>{t.daysAvailable} <span className="text-red-500">*</span></FormLabel>
            <div className="flex flex-wrap gap-4 mt-2">
              <FormField
                name="days.weekdays"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center space-x-2">
                    <FormControl>
                      <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                    </FormControl>
                    <FormLabel className="font-normal cursor-pointer">{t.weekdays}</FormLabel>
                  </FormItem>
                )}
              />
              <FormField
                name="days.weekends"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center space-x-2">
                    <FormControl>
                      <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                    </FormControl>
                    <FormLabel className="font-normal cursor-pointer">{t.weekends}</FormLabel>
                  </FormItem>
                )}
              />
              <FormField
                name="days.mornings"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center space-x-2">
                    <FormControl>
                      <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                    </FormControl>
                    <FormLabel className="font-normal cursor-pointer">{t.mornings}</FormLabel>
                  </FormItem>
                )}
              />
              <FormField
                name="days.afternoons"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center space-x-2">
                    <FormControl>
                      <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                    </FormControl>
                    <FormLabel className="font-normal cursor-pointer">{t.afternoons}</FormLabel>
                  </FormItem>
                )}
              />
            </div>
          </div>
          <FormField
            name="schedule"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t.schedule} <span className="text-red-500">*</span></FormLabel>
                <FormControl>
                  <Textarea {...field} placeholder={t.scheduleExample} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="backgroundCheck"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t.backgroundCheck} <span className="text-red-500">*</span></FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    value={field.value}
                    className="flex gap-6"
                  >
                    <FormItem className="flex items-center space-x-2">
                      <FormControl>
                        <RadioGroupItem value="yes" />
                      </FormControl>
                      <FormLabel className="font-normal cursor-pointer">{t.yes}</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-2">
                      <FormControl>
                        <RadioGroupItem value="no" />
                      </FormControl>
                      <FormLabel className="font-normal cursor-pointer">{t.no}</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div>
            <FormLabel>{t.source}</FormLabel>
            <div className="flex flex-wrap gap-4 mt-2">
              <FormField
                name="source"
                control={form.control}
                render={({ field }) => (
                  <>
                    <FormItem className="flex flex-row items-center space-x-2">
                      <FormControl>
                        <Checkbox
                          checked={field.value?.includes('instagram')}
                          onCheckedChange={(checked) => {
                            return checked
                              ? field.onChange([...(field.value || []), 'instagram'])
                              : field.onChange(field.value?.filter((v) => v !== 'instagram'));
                          }}
                        />
                      </FormControl>
                      <FormLabel className="font-normal cursor-pointer">{t.sourceOptions.instagram}</FormLabel>
                    </FormItem>
                    <FormItem className="flex flex-row items-center space-x-2">
                      <FormControl>
                        <Checkbox
                          checked={field.value?.includes('facebook')}
                          onCheckedChange={(checked) => {
                            return checked
                              ? field.onChange([...(field.value || []), 'facebook'])
                              : field.onChange(field.value?.filter((v) => v !== 'facebook'));
                          }}
                        />
                      </FormControl>
                      <FormLabel className="font-normal cursor-pointer">{t.sourceOptions.facebook}</FormLabel>
                    </FormItem>
                    <FormItem className="flex flex-row items-center space-x-2">
                      <FormControl>
                        <Checkbox
                          checked={field.value?.includes('friend')}
                          onCheckedChange={(checked) => {
                            return checked
                              ? field.onChange([...(field.value || []), 'friend'])
                              : field.onChange(field.value?.filter((v) => v !== 'friend'));
                          }}
                        />
                      </FormControl>
                      <FormLabel className="font-normal cursor-pointer">{t.sourceOptions.friend}</FormLabel>
                    </FormItem>
                    <FormItem className="flex flex-row items-center space-x-2">
                      <FormControl>
                        <Checkbox
                          checked={field.value?.includes('other')}
                          onCheckedChange={(checked) => {
                            return checked
                              ? field.onChange([...(field.value || []), 'other'])
                              : field.onChange(field.value?.filter((v) => v !== 'other'));
                          }}
                        />
                      </FormControl>
                      <FormLabel className="font-normal cursor-pointer">{t.sourceOptions.other}</FormLabel>
                    </FormItem>
                  </>
                )}
              />
            </div>
          </div>
          <FormField
            name="notes"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t.notes}</FormLabel>
                <FormControl>
                  <Textarea {...field} placeholder="..." />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="video"
            control={form.control}
            render={({ field: { value, onChange, ...fieldProps } }) => (
              <FormItem>
                <FormLabel>{t.video} <span className="text-red-500">*</span></FormLabel>
                <FormControl>
                  <Input
                    {...fieldProps}
                    type="file"
                    accept="video/*"
                    onChange={e => onChange(e.target.files?.[0] || null)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full py-3" disabled={uploading}>
            {uploading ? t.uploading : t.submit}
          </Button>
        </form>
      </Form>
    </div>
  );
}