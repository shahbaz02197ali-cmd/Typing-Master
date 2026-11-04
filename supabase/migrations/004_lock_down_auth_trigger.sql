-- Restrict trigger helper execution to the database owner; it is invoked by the auth trigger, not as an API RPC.
revoke all on function public.handle_new_auth_user() from public;
revoke all on function public.handle_new_auth_user() from anon;
revoke all on function public.handle_new_auth_user() from authenticated;
