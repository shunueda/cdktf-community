// https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/opendistro_kibana_tenant
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OpendistroKibanaTenantConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/opendistro_kibana_tenant#description OpendistroKibanaTenant#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/opendistro_kibana_tenant#id OpendistroKibanaTenant#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/opendistro_kibana_tenant#tenant_name OpendistroKibanaTenant#tenant_name}
  */
  readonly tenantName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/opendistro_kibana_tenant elasticsearch_opendistro_kibana_tenant}
*/
export class OpendistroKibanaTenant extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "elasticsearch_opendistro_kibana_tenant";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OpendistroKibanaTenant resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OpendistroKibanaTenant to import
  * @param importFromId The id of the existing OpendistroKibanaTenant that should be imported. Refer to the {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/opendistro_kibana_tenant#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OpendistroKibanaTenant to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "elasticsearch_opendistro_kibana_tenant", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/opendistro_kibana_tenant elasticsearch_opendistro_kibana_tenant} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OpendistroKibanaTenantConfig
  */
  public constructor(scope: Construct, id: string, config: OpendistroKibanaTenantConfig) {
    super(scope, id, {
      terraformResourceType: 'elasticsearch_opendistro_kibana_tenant',
      terraformGeneratorMetadata: {
        providerName: 'elasticsearch',
        providerVersion: '2.0.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._id = config.id;
    this._tenantName = config.tenantName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // index - computed: true, optional: false, required: false
  public get index() {
    return this.getStringAttribute('index');
  }

  // tenant_name - computed: false, optional: false, required: true
  private _tenantName?: string; 
  public get tenantName() {
    return this.getStringAttribute('tenant_name');
  }
  public set tenantName(value: string) {
    this._tenantName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantNameInput() {
    return this._tenantName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      tenant_name: cdktf.stringToTerraform(this._tenantName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_name: {
        value: cdktf.stringToHclTerraform(this._tenantName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
