import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { IEmail, NewEmail } from '../email.model';

/**
 * A partial Type with required key is used as form input.
 */
type PartialWithRequiredKeyOf<T extends { id: unknown }> = Partial<Omit<T, 'id'>> & { id: T['id'] };

/**
 * Type for createFormGroup and resetForm argument.
 * It accepts IEmail for edit and NewEmailFormGroupInput for create.
 */
type EmailFormGroupInput = IEmail | PartialWithRequiredKeyOf<NewEmail>;

type EmailFormDefaults = Pick<NewEmail, 'id'>;

type EmailFormGroupContent = {
  id: FormControl<IEmail['id'] | NewEmail['id']>;
  title: FormControl<IEmail['title']>;
  content: FormControl<IEmail['content']>;
  sendingDate: FormControl<IEmail['sendingDate']>;
};

export type EmailFormGroup = FormGroup<EmailFormGroupContent>;

@Injectable({ providedIn: 'root' })
export class EmailFormService {
  createEmailFormGroup(email: EmailFormGroupInput = { id: null }): EmailFormGroup {
    const emailRawValue = {
      ...this.getFormDefaults(),
      ...email,
    };
    return new FormGroup<EmailFormGroupContent>({
      id: new FormControl(
        { value: emailRawValue.id, disabled: true },
        {
          nonNullable: true,
          validators: [Validators.required],
        }
      ),
      title: new FormControl(emailRawValue.title),
      content: new FormControl(emailRawValue.content),
      sendingDate: new FormControl(emailRawValue.sendingDate),
    });
  }

  getEmail(form: EmailFormGroup): IEmail | NewEmail {
    return form.getRawValue() as IEmail | NewEmail;
  }

  resetForm(form: EmailFormGroup, email: EmailFormGroupInput): void {
    const emailRawValue = { ...this.getFormDefaults(), ...email };
    form.reset(
      {
        ...emailRawValue,
        id: { value: emailRawValue.id, disabled: true },
      } as any /* cast to workaround https://github.com/angular/angular/issues/46458 */
    );
  }

  private getFormDefaults(): EmailFormDefaults {
    return {
      id: null,
    };
  }
}
