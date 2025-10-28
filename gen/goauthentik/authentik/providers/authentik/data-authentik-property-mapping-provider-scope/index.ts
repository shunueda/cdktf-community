// https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/data-sources/property_mapping_provider_scope
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAuthentikPropertyMappingProviderScopeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/data-sources/property_mapping_provider_scope#id DataAuthentikPropertyMappingProviderScope#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * List of ids when `managed_list` is set. Generated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/data-sources/property_mapping_provider_scope#ids DataAuthentikPropertyMappingProviderScope#ids}
  */
  readonly ids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/data-sources/property_mapping_provider_scope#managed DataAuthentikPropertyMappingProviderScope#managed}
  */
  readonly managed?: string;
  /**
  * Retrieve multiple property mappings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/data-sources/property_mapping_provider_scope#managed_list DataAuthentikPropertyMappingProviderScope#managed_list}
  */
  readonly managedList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/data-sources/property_mapping_provider_scope#name DataAuthentikPropertyMappingProviderScope#name}
  */
  readonly name?: string;
  /**
  * Generated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/data-sources/property_mapping_provider_scope#scope_name DataAuthentikPropertyMappingProviderScope#scope_name}
  */
  readonly scopeName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/data-sources/property_mapping_provider_scope authentik_property_mapping_provider_scope}
*/
export class DataAuthentikPropertyMappingProviderScope extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "authentik_property_mapping_provider_scope";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAuthentikPropertyMappingProviderScope resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAuthentikPropertyMappingProviderScope to import
  * @param importFromId The id of the existing DataAuthentikPropertyMappingProviderScope that should be imported. Refer to the {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/data-sources/property_mapping_provider_scope#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAuthentikPropertyMappingProviderScope to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "authentik_property_mapping_provider_scope", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/data-sources/property_mapping_provider_scope authentik_property_mapping_provider_scope} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAuthentikPropertyMappingProviderScopeConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAuthentikPropertyMappingProviderScopeConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'authentik_property_mapping_provider_scope',
      terraformGeneratorMetadata: {
        providerName: 'authentik',
        providerVersion: '2025.10.0'
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
    this._ids = config.ids;
    this._managed = config.managed;
    this._managedList = config.managedList;
    this._name = config.name;
    this._scopeName = config.scopeName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // expression - computed: true, optional: false, required: false
  public get expression() {
    return this.getStringAttribute('expression');
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

  // ids - computed: true, optional: true, required: false
  private _ids?: string[]; 
  public get ids() {
    return this.getListAttribute('ids');
  }
  public set ids(value: string[]) {
    this._ids = value;
  }
  public resetIds() {
    this._ids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idsInput() {
    return this._ids;
  }

  // managed - computed: false, optional: true, required: false
  private _managed?: string; 
  public get managed() {
    return this.getStringAttribute('managed');
  }
  public set managed(value: string) {
    this._managed = value;
  }
  public resetManaged() {
    this._managed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedInput() {
    return this._managed;
  }

  // managed_list - computed: false, optional: true, required: false
  private _managedList?: string[]; 
  public get managedList() {
    return this.getListAttribute('managed_list');
  }
  public set managedList(value: string[]) {
    this._managedList = value;
  }
  public resetManagedList() {
    this._managedList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedListInput() {
    return this._managedList;
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

  // scope_name - computed: true, optional: true, required: false
  private _scopeName?: string; 
  public get scopeName() {
    return this.getStringAttribute('scope_name');
  }
  public set scopeName(value: string) {
    this._scopeName = value;
  }
  public resetScopeName() {
    this._scopeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeNameInput() {
    return this._scopeName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      managed: cdktf.stringToTerraform(this._managed),
      managed_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._managedList),
      name: cdktf.stringToTerraform(this._name),
      scope_name: cdktf.stringToTerraform(this._scopeName),
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
      ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ids),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      managed: {
        value: cdktf.stringToHclTerraform(this._managed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      managed_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._managedList),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scope_name: {
        value: cdktf.stringToHclTerraform(this._scopeName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
