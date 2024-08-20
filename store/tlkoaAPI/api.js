import axios from "axios"
const tlkoaAPI = axios.create({
  baseURL: "https://tlkoa-49114.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return tlkoaAPI.get(`/api-docs/schema/`, { params: { lang: payload.lang } })
}
function api_v1_login_create(payload) {
  return tlkoaAPI.post(`/api/v1/login/`, payload)
}
function api_v1_signup_create(payload) {
  return tlkoaAPI.post(`/api/v1/signup/`, payload)
}
function modules_openai_audio_transcription_create(payload) {
  return tlkoaAPI.post(`/modules/openai/audio/transcription/`, payload)
}
function modules_openai_audio_translation_create(payload) {
  return tlkoaAPI.post(`/modules/openai/audio/translation/`, payload)
}
function modules_openai_chat_completions_create(payload) {
  return tlkoaAPI.post(`/modules/openai/chat/completions/`, payload)
}
function modules_openai_completion_create(payload) {
  return tlkoaAPI.post(`/modules/openai/completion/`, payload)
}
function modules_openai_edits_create(payload) {
  return tlkoaAPI.post(`/modules/openai/edits/`, payload)
}
function modules_openai_engines_retrieve(payload) {
  return tlkoaAPI.get(`/modules/openai/engines/`)
}
function modules_openai_engines_retrieve_2(payload) {
  return tlkoaAPI.get(`/modules/openai/engines/${payload.engine_id}/`)
}
function modules_openai_images_generations_create(payload) {
  return tlkoaAPI.post(`/modules/openai/images/generations/`, payload)
}
function modules_openai_models_retrieve(payload) {
  return tlkoaAPI.get(`/modules/openai/models/`)
}
function modules_openai_models_retrieve_2(payload) {
  return tlkoaAPI.get(`/modules/openai/models/${payload.model_id}/`)
}
function rest_auth_login_create(payload) {
  return tlkoaAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_create(payload) {
  return tlkoaAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return tlkoaAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return tlkoaAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return tlkoaAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return tlkoaAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_resend_email_create(payload) {
  return tlkoaAPI.post(`/rest-auth/registration/resend-email/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return tlkoaAPI.post(`/rest-auth/registration/verify-email/`, payload)
}
function rest_auth_user_retrieve(payload) {
  return tlkoaAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return tlkoaAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return tlkoaAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_login_create,
  api_v1_signup_create,
  modules_openai_audio_transcription_create,
  modules_openai_audio_translation_create,
  modules_openai_chat_completions_create,
  modules_openai_completion_create,
  modules_openai_edits_create,
  modules_openai_engines_retrieve,
  modules_openai_engines_retrieve_2,
  modules_openai_images_generations_create,
  modules_openai_models_retrieve,
  modules_openai_models_retrieve_2,
  rest_auth_login_create,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_resend_email_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
