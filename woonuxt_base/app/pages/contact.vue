<template>
  <div
      class="flex w-full flex-col-reverse gap-8 px-4 py-12 md:grid md:grid-cols-12"
  >
    <div class="relative col-span-full md:col-span-6">
      <h2 class="text-dark-900 dark:text-dark-50 text-4xl font-bold">
        Nous sommes là pour vous aider
      </h2>
      <p class="text-lgfont-normal text-dark-900/60 dark:text-dark-50/60 mt-2">
        Vous avez des questions ou besoin d'assistance ? N'hésitez pas à nous contacter.
        <br> Nous sommes à votre disposition pour répondre à toutes vos demandes !
      </p>
      <div class="relative mt-12 w-full">
        <UForm
            :validate="validate"
            :state="state"
            class="grid grid-cols-12 gap-4"
            @submit="onSubmit"
        >
          <div class="col-span-full md:col-span-6">
            <UFormGroup label="Nom" name="fullname" size="lg" required>
              <UInput v-model="state.fullname" class="w-full" />
            </UFormGroup>
          </div>
          <div class="col-span-full md:col-span-6">
            <UFormGroup label="Email" name="email" size="lg" required>
              <UInput v-model="state.email" type="email" class="w-full" />
            </UFormGroup>
          </div>
          <div class="col-span-full">
            <UFormGroup label="Message" name="message" size="lg" required>
              <UTextarea
                  v-model="state.message"
                  :rows="6"
                  type="textarea"
                  class="w-full"
              />
            </UFormGroup>
          </div>
          <div class="col-span-full">
            <UFormGroup name="agree" size="lg">
              <UCheckbox v-model="state.agree" required>
                <template #label>
                  I agree with the
                  <ULink to="#"> privacy policy </ULink>
                </template>
              </UCheckbox>
            </UFormGroup>
          </div>
          <div class="col-span-full">
            <UButton block type="submit" size="lg" class="cursor-pointer">
              Send message
            </UButton>
          </div>
        </UForm>
      </div>
    </div>
    <div class="relative col-span-full md:col-span-6">
      <NuxtImg
          format="webp"
          class="h-96 w-full rounded-md object-cover object-center md:h-full"
          src="https://images.unsplash.com/photo-1707051703895-ea022c66c428?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          loading="lazy"
          alt="my-enterprise-image"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { FormError, FormSubmitEvent } from "#ui/types";

const state = reactive({
  fullname: undefined,
  email: undefined,
  phone: undefined,
  company: undefined,
  agree: false,
  message: undefined,
});
const toast = useToast();

const validate = (state: any): FormError[] => {
  const errors = [];
  if (!state.fullname)
    errors.push({ name: "fullname", message: "Field required" });
  if (!state.email) errors.push({ name: "email", message: "Field required" });
  if (!state.phone) errors.push({ name: "phone", message: "Field required" });
  if (!state.company)
    errors.push({ name: "company", message: "Field required" });
  if (!state.agree) errors.push({ name: "agree", message: "Field required" });
  if (!state.message)
    errors.push({ name: "message", message: "Field required" });
  return errors;
};

async function onSubmit(event: FormSubmitEvent<any>) {
  toast.add({
    title: "Done!",
    description: "The message has been submitted",
    color: "success",
  });
  state.fullname = undefined;
  state.email = undefined;
  state.phone = undefined;
  state.company = undefined;
  state.agree = false;
  state.message = undefined;
}
</script>
