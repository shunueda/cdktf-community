// https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.27/docs/data-sources/azure_cosmos_db_database
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDuplocloudAzureCosmosDbDatabaseConfig extends cdktf.TerraformMetaArguments {
  /**
  * Indicates on which account database will be created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.27/docs/data-sources/azure_cosmos_db_database#account_name DataDuplocloudAzureCosmosDbDatabase#account_name}
  */
  readonly accountName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.27/docs/data-sources/azure_cosmos_db_database#id DataDuplocloudAzureCosmosDbDatabase#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name for Cosmsos DB database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.27/docs/data-sources/azure_cosmos_db_database#name DataDuplocloudAzureCosmosDbDatabase#name}
  */
  readonly name: string;
  /**
  * The GUID of the tenant in which the Cosmos DB database will be created for specified account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.27/docs/data-sources/azure_cosmos_db_database#tenant_id DataDuplocloudAzureCosmosDbDatabase#tenant_id}
  */
  readonly tenantId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.27/docs/data-sources/azure_cosmos_db_database duplocloud_azure_cosmos_db_database}
*/
export class DataDuplocloudAzureCosmosDbDatabase extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "duplocloud_azure_cosmos_db_database";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDuplocloudAzureCosmosDbDatabase resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDuplocloudAzureCosmosDbDatabase to import
  * @param importFromId The id of the existing DataDuplocloudAzureCosmosDbDatabase that should be imported. Refer to the {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.27/docs/data-sources/azure_cosmos_db_database#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDuplocloudAzureCosmosDbDatabase to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "duplocloud_azure_cosmos_db_database", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.27/docs/data-sources/azure_cosmos_db_database duplocloud_azure_cosmos_db_database} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDuplocloudAzureCosmosDbDatabaseConfig
  */
  public constructor(scope: Construct, id: string, config: DataDuplocloudAzureCosmosDbDatabaseConfig) {
    super(scope, id, {
      terraformResourceType: 'duplocloud_azure_cosmos_db_database',
      terraformGeneratorMetadata: {
        providerName: 'duplocloud',
        providerVersion: '0.11.27'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountName = config.accountName;
    this._id = config.id;
    this._name = config.name;
    this._tenantId = config.tenantId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_name - computed: false, optional: false, required: true
  private _accountName?: string; 
  public get accountName() {
    return this.getStringAttribute('account_name');
  }
  public set accountName(value: string) {
    this._accountName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountNameInput() {
    return this._accountName;
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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // tenant_id - computed: false, optional: false, required: true
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_name: cdktf.stringToTerraform(this._accountName),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_name: {
        value: cdktf.stringToHclTerraform(this._accountName),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_id: {
        value: cdktf.stringToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
