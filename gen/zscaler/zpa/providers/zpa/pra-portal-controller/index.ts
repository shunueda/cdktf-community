// https://registry.terraform.io/providers/zscaler/zpa/4.2.6/docs/resources/pra_portal_controller
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PraPortalControllerConfig extends cdktf.TerraformMetaArguments {
  /**
  * The unique identifier of the certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.2.6/docs/resources/pra_portal_controller#certificate_id PraPortalController#certificate_id}
  */
  readonly certificateId?: string;
  /**
  * The description of the privileged portal
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.2.6/docs/resources/pra_portal_controller#description PraPortalController#description}
  */
  readonly description?: string;
  /**
  * The domain of the privileged portal
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.2.6/docs/resources/pra_portal_controller#domain PraPortalController#domain}
  */
  readonly domain?: string;
  /**
  * Whether or not the privileged portal is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.2.6/docs/resources/pra_portal_controller#enabled PraPortalController#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The external domain name prefix of the Browser Access application that is used for Zscaler-managed certificates when creating a privileged portal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.2.6/docs/resources/pra_portal_controller#ext_domain PraPortalController#ext_domain}
  */
  readonly extDomain?: string;
  /**
  * The domain suffix for the privileged portal URL. This field must be one of the customer's authentication domains.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.2.6/docs/resources/pra_portal_controller#ext_domain_name PraPortalController#ext_domain_name}
  */
  readonly extDomainName?: string;
  /**
  * The translation of the external domain name prefix of the Browser Access application that is used for Zscaler-managed certificates when creating a privileged portal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.2.6/docs/resources/pra_portal_controller#ext_domain_translation PraPortalController#ext_domain_translation}
  */
  readonly extDomainTranslation?: string;
  /**
  * The domain prefix for the privileged portal URL. The supported string can include numbers, lower case characters, and only supports a hyphen (-).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.2.6/docs/resources/pra_portal_controller#ext_label PraPortalController#ext_label}
  */
  readonly extLabel?: string;
  /**
  * The unique identifier of the Microtenant for the ZPA tenant. If you are within the Default Microtenant, pass microtenantId as 0 when making requests to retrieve data from the Default Microtenant. Pass microtenantId as null to retrieve data from all customers associated with the tenant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.2.6/docs/resources/pra_portal_controller#microtenant_id PraPortalController#microtenant_id}
  */
  readonly microtenantId?: string;
  /**
  * The name of the privileged portal
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.2.6/docs/resources/pra_portal_controller#name PraPortalController#name}
  */
  readonly name?: string;
  /**
  * The notification message displayed in the banner of the privileged portallink, if enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.2.6/docs/resources/pra_portal_controller#user_notification PraPortalController#user_notification}
  */
  readonly userNotification?: string;
  /**
  * Indicates if the Notification Banner is enabled (true) or disabled (false)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.2.6/docs/resources/pra_portal_controller#user_notification_enabled PraPortalController#user_notification_enabled}
  */
  readonly userNotificationEnabled?: boolean | cdktf.IResolvable;
  /**
  * The unique identifier of the user portal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.2.6/docs/resources/pra_portal_controller#user_portal_gid PraPortalController#user_portal_gid}
  */
  readonly userPortalGid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zpa/4.2.6/docs/resources/pra_portal_controller zpa_pra_portal_controller}
*/
export class PraPortalController extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zpa_pra_portal_controller";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PraPortalController resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PraPortalController to import
  * @param importFromId The id of the existing PraPortalController that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zpa/4.2.6/docs/resources/pra_portal_controller#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PraPortalController to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zpa_pra_portal_controller", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zpa/4.2.6/docs/resources/pra_portal_controller zpa_pra_portal_controller} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PraPortalControllerConfig = {}
  */
  public constructor(scope: Construct, id: string, config: PraPortalControllerConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'zpa_pra_portal_controller',
      terraformGeneratorMetadata: {
        providerName: 'zpa',
        providerVersion: '4.2.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._certificateId = config.certificateId;
    this._description = config.description;
    this._domain = config.domain;
    this._enabled = config.enabled;
    this._extDomain = config.extDomain;
    this._extDomainName = config.extDomainName;
    this._extDomainTranslation = config.extDomainTranslation;
    this._extLabel = config.extLabel;
    this._microtenantId = config.microtenantId;
    this._name = config.name;
    this._userNotification = config.userNotification;
    this._userNotificationEnabled = config.userNotificationEnabled;
    this._userPortalGid = config.userPortalGid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificate_id - computed: true, optional: true, required: false
  private _certificateId?: string; 
  public get certificateId() {
    return this.getStringAttribute('certificate_id');
  }
  public set certificateId(value: string) {
    this._certificateId = value;
  }
  public resetCertificateId() {
    this._certificateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateIdInput() {
    return this._certificateId;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // ext_domain - computed: false, optional: true, required: false
  private _extDomain?: string; 
  public get extDomain() {
    return this.getStringAttribute('ext_domain');
  }
  public set extDomain(value: string) {
    this._extDomain = value;
  }
  public resetExtDomain() {
    this._extDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extDomainInput() {
    return this._extDomain;
  }

  // ext_domain_name - computed: false, optional: true, required: false
  private _extDomainName?: string; 
  public get extDomainName() {
    return this.getStringAttribute('ext_domain_name');
  }
  public set extDomainName(value: string) {
    this._extDomainName = value;
  }
  public resetExtDomainName() {
    this._extDomainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extDomainNameInput() {
    return this._extDomainName;
  }

  // ext_domain_translation - computed: false, optional: true, required: false
  private _extDomainTranslation?: string; 
  public get extDomainTranslation() {
    return this.getStringAttribute('ext_domain_translation');
  }
  public set extDomainTranslation(value: string) {
    this._extDomainTranslation = value;
  }
  public resetExtDomainTranslation() {
    this._extDomainTranslation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extDomainTranslationInput() {
    return this._extDomainTranslation;
  }

  // ext_label - computed: false, optional: true, required: false
  private _extLabel?: string; 
  public get extLabel() {
    return this.getStringAttribute('ext_label');
  }
  public set extLabel(value: string) {
    this._extLabel = value;
  }
  public resetExtLabel() {
    this._extLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extLabelInput() {
    return this._extLabel;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // microtenant_id - computed: false, optional: true, required: false
  private _microtenantId?: string; 
  public get microtenantId() {
    return this.getStringAttribute('microtenant_id');
  }
  public set microtenantId(value: string) {
    this._microtenantId = value;
  }
  public resetMicrotenantId() {
    this._microtenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get microtenantIdInput() {
    return this._microtenantId;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // user_notification - computed: false, optional: true, required: false
  private _userNotification?: string; 
  public get userNotification() {
    return this.getStringAttribute('user_notification');
  }
  public set userNotification(value: string) {
    this._userNotification = value;
  }
  public resetUserNotification() {
    this._userNotification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNotificationInput() {
    return this._userNotification;
  }

  // user_notification_enabled - computed: false, optional: true, required: false
  private _userNotificationEnabled?: boolean | cdktf.IResolvable; 
  public get userNotificationEnabled() {
    return this.getBooleanAttribute('user_notification_enabled');
  }
  public set userNotificationEnabled(value: boolean | cdktf.IResolvable) {
    this._userNotificationEnabled = value;
  }
  public resetUserNotificationEnabled() {
    this._userNotificationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNotificationEnabledInput() {
    return this._userNotificationEnabled;
  }

  // user_portal_gid - computed: false, optional: true, required: false
  private _userPortalGid?: string; 
  public get userPortalGid() {
    return this.getStringAttribute('user_portal_gid');
  }
  public set userPortalGid(value: string) {
    this._userPortalGid = value;
  }
  public resetUserPortalGid() {
    this._userPortalGid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userPortalGidInput() {
    return this._userPortalGid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      certificate_id: cdktf.stringToTerraform(this._certificateId),
      description: cdktf.stringToTerraform(this._description),
      domain: cdktf.stringToTerraform(this._domain),
      enabled: cdktf.booleanToTerraform(this._enabled),
      ext_domain: cdktf.stringToTerraform(this._extDomain),
      ext_domain_name: cdktf.stringToTerraform(this._extDomainName),
      ext_domain_translation: cdktf.stringToTerraform(this._extDomainTranslation),
      ext_label: cdktf.stringToTerraform(this._extLabel),
      microtenant_id: cdktf.stringToTerraform(this._microtenantId),
      name: cdktf.stringToTerraform(this._name),
      user_notification: cdktf.stringToTerraform(this._userNotification),
      user_notification_enabled: cdktf.booleanToTerraform(this._userNotificationEnabled),
      user_portal_gid: cdktf.stringToTerraform(this._userPortalGid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      certificate_id: {
        value: cdktf.stringToHclTerraform(this._certificateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ext_domain: {
        value: cdktf.stringToHclTerraform(this._extDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ext_domain_name: {
        value: cdktf.stringToHclTerraform(this._extDomainName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ext_domain_translation: {
        value: cdktf.stringToHclTerraform(this._extDomainTranslation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ext_label: {
        value: cdktf.stringToHclTerraform(this._extLabel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      microtenant_id: {
        value: cdktf.stringToHclTerraform(this._microtenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_notification: {
        value: cdktf.stringToHclTerraform(this._userNotification),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_notification_enabled: {
        value: cdktf.booleanToHclTerraform(this._userNotificationEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      user_portal_gid: {
        value: cdktf.stringToHclTerraform(this._userPortalGid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
