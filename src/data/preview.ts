export type Day = 0 | 1 | 2 | 3 | 4 | 5 | 6
export const dayNames = ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'] as const

export type Meal = { meal_type: 'Colazione' | 'Pranzo' | 'Cena' | 'Spuntino'; meal_name: string; details?: Record<string, string> }
export type Lesson = { day_of_week: Day; title: string; start_time: string; end_time: string; mode: string }
export type Sport = { day_of_week: Day; title: string; start_time?: string; end_time?: string; location: string; min_duration: number; intensity: string; required: boolean; notes: string }

const breakfast = (fruit: string): Meal => ({ meal_type: 'Colazione', meal_name: `yogurt, miele e ${fruit}`, details: { yogurt: '170 g', miele: '10 g', [fruit]: '200 g' } })
export const previewMeals: Record<Day, Meal[]> = {
  0: [breakfast('kiwi'), { meal_type: 'Pranzo', meal_name: 'insalata di fagioli e mozzarella' }, { meal_type: 'Cena', meal_name: 'fettina di manzo e verdure' }],
  1: [breakfast('kiwi'), { meal_type: 'Pranzo', meal_name: 'riso, tonno e zucchine' }, { meal_type: 'Cena', meal_name: 'hamburger di pollo e spinaci' }],
  2: [breakfast('banane'), { meal_type: 'Pranzo', meal_name: 'pasta fredda con zucchine e gamberi' }, { meal_type: 'Cena', meal_name: 'platessa alla pizzaiola' }],
  3: [breakfast('melone'), { meal_type: 'Pranzo', meal_name: 'quinoa e mozzarella' }, { meal_type: 'Cena', meal_name: 'tagliata con rucola' }],
  4: [breakfast('fichi freschi'), { meal_type: 'Pranzo', meal_name: 'riso e salmone' }, { meal_type: 'Cena', meal_name: 'listarelle di pollo e funghi' }],
  5: [breakfast('prugne'), { meal_type: 'Pranzo', meal_name: 'pasta fredda al tonno' }, { meal_type: 'Cena', meal_name: 'nasello alla pizzaiola' }],
  6: [breakfast('mele Annurca'), { meal_type: 'Pranzo', meal_name: 'quinoa e macinato di pollo' }, { meal_type: 'Cena', meal_name: 'frittata di zucchine' }],
}
export const previewLessons: Lesson[] = [
  { day_of_week: 1, title: 'Comunicazione e Persuasione', start_time: '11:00', end_time: '14:00', mode: 'In presenza' },
  { day_of_week: 2, title: 'Marketing', start_time: '08:00', end_time: '11:00', mode: 'Autostudio' },
  { day_of_week: 2, title: 'Istituzioni Storia Contemporanea', start_time: '11:00', end_time: '14:00', mode: 'In presenza' },
  { day_of_week: 3, title: 'Linguistica e Comunicazione', start_time: '08:00', end_time: '11:00', mode: 'In presenza' },
  { day_of_week: 3, title: 'Istituzioni Storia Contemporanea', start_time: '11:00', end_time: '14:00', mode: 'In presenza' },
  { day_of_week: 4, title: 'Psicologia della Comunicazione', start_time: '08:00', end_time: '11:00', mode: 'Online' },
  { day_of_week: 5, title: 'Laboratorio di Comunicazione', start_time: '14:00', end_time: '17:00', mode: 'In presenza' },
]
export const previewSports: Sport[] = [
  { day_of_week: 1, title: 'Pesi', start_time: '18:00', location: 'home_gym', min_duration: 75, intensity: 'Media', required: true, notes: 'Allenamento pesi; intensità media o alta' },
  { day_of_week: 2, title: 'Calcio', start_time: '19:30', end_time: '21:30', location: 'campo', min_duration: 120, intensity: 'Alta', required: true, notes: '' },
  { day_of_week: 4, title: 'Calcio', start_time: '19:30', end_time: '21:30', location: 'campo', min_duration: 120, intensity: 'Alta', required: true, notes: '' },
  { day_of_week: 5, title: 'Pesi', start_time: '18:00', location: 'home_gym', min_duration: 75, intensity: 'Media', required: true, notes: 'Allenamento pesi; intensità media o alta' },
  { day_of_week: 6, title: 'Partita', location: 'campo', min_duration: 180, intensity: 'Alta', required: false, notes: 'Partita ufficiale facoltativa' },
  { day_of_week: 0, title: 'Partita', location: 'campo', min_duration: 180, intensity: 'Alta', required: false, notes: 'Partita ufficiale facoltativa' },
]
