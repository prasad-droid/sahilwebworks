/** Configures where the enquiry form submits. See README for integration. */
export const formConfig = {
  /**
   * Set this to a real endpoint (for example a form service or your API),
   * e.g. formEndpoint = 'https://yourcrm.example.com/api/enquiry'
   * When null the form runs in "not connected" mode: it validates the
   * fields locally, then clearly informs the visitor to contact the
   * company directly instead of showing a false success message.
   */
  formEndpoint: null,
  method: 'POST',
  /** Adjust headers when connecting a CRM with specific auth requirements. */
  headers: { 'Content-Type': 'application/json' }
}