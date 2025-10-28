// https://registry.terraform.io/providers/zitadel/zitadel/2.2.0/docs/resources/password_age_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PasswordAgePolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * amount of days after which the user should be notified of the upcoming expiry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.2.0/docs/resources/password_age_policy#expire_warn_days PasswordAgePolicy#expire_warn_days}
  */
  readonly expireWarnDays: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.2.0/docs/resources/password_age_policy#id PasswordAgePolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * amount of days after which a password will expire
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.2.0/docs/resources/password_age_policy#max_age_days PasswordAgePolicy#max_age_days}
  */
  readonly maxAgeDays: number;
  /**
  * ID of the organization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.2.0/docs/resources/password_age_policy#org_id PasswordAgePolicy#org_id}
  */
  readonly orgId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zitadel/zitadel/2.2.0/docs/resources/password_age_policy zitadel_password_age_policy}
*/
export class PasswordAgePolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zitadel_password_age_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PasswordAgePolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PasswordAgePolicy to import
  * @param importFromId The id of the existing PasswordAgePolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/zitadel/zitadel/2.2.0/docs/resources/password_age_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PasswordAgePolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zitadel_password_age_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zitadel/zitadel/2.2.0/docs/resources/password_age_policy zitadel_password_age_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PasswordAgePolicyConfig
  */
  public constructor(scope: Construct, id: string, config: PasswordAgePolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'zitadel_password_age_policy',
      terraformGeneratorMetadata: {
        providerName: 'zitadel',
        providerVersion: '2.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._expireWarnDays = config.expireWarnDays;
    this._id = config.id;
    this._maxAgeDays = config.maxAgeDays;
    this._orgId = config.orgId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // expire_warn_days - computed: false, optional: false, required: true
  private _expireWarnDays?: number; 
  public get expireWarnDays() {
    return this.getNumberAttribute('expire_warn_days');
  }
  public set expireWarnDays(value: number) {
    this._expireWarnDays = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expireWarnDaysInput() {
    return this._expireWarnDays;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // max_age_days - computed: false, optional: false, required: true
  private _maxAgeDays?: number; 
  public get maxAgeDays() {
    return this.getNumberAttribute('max_age_days');
  }
  public set maxAgeDays(value: number) {
    this._maxAgeDays = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAgeDaysInput() {
    return this._maxAgeDays;
  }

  // org_id - computed: false, optional: true, required: false
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  public resetOrgId() {
    this._orgId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      expire_warn_days: cdktf.numberToTerraform(this._expireWarnDays),
      id: cdktf.stringToTerraform(this._id),
      max_age_days: cdktf.numberToTerraform(this._maxAgeDays),
      org_id: cdktf.stringToTerraform(this._orgId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      expire_warn_days: {
        value: cdktf.numberToHclTerraform(this._expireWarnDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_age_days: {
        value: cdktf.numberToHclTerraform(this._maxAgeDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
