// https://registry.terraform.io/providers/zitadel/zitadel/2.2.0/docs/data-sources/org_idp_github
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataZitadelOrgIdpGithubConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.2.0/docs/data-sources/org_idp_github#id DataZitadelOrgIdpGithub#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * ID of the organization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.2.0/docs/data-sources/org_idp_github#org_id DataZitadelOrgIdpGithub#org_id}
  */
  readonly orgId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zitadel/zitadel/2.2.0/docs/data-sources/org_idp_github zitadel_org_idp_github}
*/
export class DataZitadelOrgIdpGithub extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zitadel_org_idp_github";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataZitadelOrgIdpGithub resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataZitadelOrgIdpGithub to import
  * @param importFromId The id of the existing DataZitadelOrgIdpGithub that should be imported. Refer to the {@link https://registry.terraform.io/providers/zitadel/zitadel/2.2.0/docs/data-sources/org_idp_github#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataZitadelOrgIdpGithub to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zitadel_org_idp_github", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zitadel/zitadel/2.2.0/docs/data-sources/org_idp_github zitadel_org_idp_github} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataZitadelOrgIdpGithubConfig
  */
  public constructor(scope: Construct, id: string, config: DataZitadelOrgIdpGithubConfig) {
    super(scope, id, {
      terraformResourceType: 'zitadel_org_idp_github',
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
    this._id = config.id;
    this._orgId = config.orgId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_linking - computed: true, optional: false, required: false
  public get autoLinking() {
    return this.getStringAttribute('auto_linking');
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // client_secret - computed: true, optional: false, required: false
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // is_auto_creation - computed: true, optional: false, required: false
  public get isAutoCreation() {
    return this.getBooleanAttribute('is_auto_creation');
  }

  // is_auto_update - computed: true, optional: false, required: false
  public get isAutoUpdate() {
    return this.getBooleanAttribute('is_auto_update');
  }

  // is_creation_allowed - computed: true, optional: false, required: false
  public get isCreationAllowed() {
    return this.getBooleanAttribute('is_creation_allowed');
  }

  // is_linking_allowed - computed: true, optional: false, required: false
  public get isLinkingAllowed() {
    return this.getBooleanAttribute('is_linking_allowed');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
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

  // scopes - computed: true, optional: false, required: false
  public get scopes() {
    return cdktf.Fn.tolist(this.getListAttribute('scopes'));
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      org_id: cdktf.stringToTerraform(this._orgId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
