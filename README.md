# GoodHabit

App personale in italiano per organizzare studio, pasti, allenamenti e abitudini quotidiane.

## Avvio locale

```bash
npm install
cp .env.example .env.local
npm run dev
```

Per collegare Supabase, valorizza in `.env.local`:

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY` (anon/publishable key, mai `service_role`)

Senza queste variabili l'app usa una **modalità anteprima locale** con il piano settimanale fornito: non effettua richieste né scritture verso Supabase.

## Integrazione Supabase

Il client ufficiale viene creato solo quando entrambe le variabili sono presenti. Dopo l'autenticazione, l'app legge `profiles`, `lesson_calendar`, `nutrition_plan`, `sport_schedule`, `daily_tracking` e `dynamic_exams` tramite RLS. Non invia un `user_id` dal browser e non include dati reali nel repository.

Le schermate che dipendono da tabelle con policy di scrittura non confermate restano volutamente in sola lettura: l'interfaccia non dichiara mai riusciti check-in o modifiche non persistite. I nomi dei campi non verificabili offline sono gestiti con fallback difensivi; vanno confrontati con lo schema remoto prima di usare funzionalità aggiuntive.

## Verifica

```bash
npm run build
```

## Decisioni amministrative ancora necessarie

1. Inserire i valori reali delle variabili d'ambiente solo nell'ambiente di deploy.
2. Verificare sul progetto `hodopqjaubajuhxdnsvi` nomi, tipi e vincoli effettivi delle colonne.
3. Approvare eventuali policy RLS di scrittura prima di abilitare check-in o modifiche a lezioni, pasti e allenamenti.
4. Verificare separatamente le policy e le colonne di `exam_daily_progress` prima di aggiungere editor del progresso.

Non sono state applicate migrazioni, reset, cancellazioni o modifiche remote.
