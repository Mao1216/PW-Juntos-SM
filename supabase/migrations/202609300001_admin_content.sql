create table if not exists public.site_content (
  key text primary key,
  value jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now(),
  updated_by uuid references auth.users(id)
);

alter table public.site_content enable row level security;

create policy "Public can read site content" on public.site_content
  for select using (true);

create policy "Admin can insert site content" on public.site_content
  for insert with check ((auth.jwt() ->> 'email') = 'gosht2323@juntossm.local');

create policy "Admin can update site content" on public.site_content
  for update using ((auth.jwt() ->> 'email') = 'gosht2323@juntossm.local')
  with check ((auth.jwt() ->> 'email') = 'gosht2323@juntossm.local');

create policy "Admin can delete site content" on public.site_content
  for delete using ((auth.jwt() ->> 'email') = 'gosht2323@juntossm.local');
