// https://registry.terraform.io/providers/ciscodevnet/mso/1.5.3/docs/data-sources/schema_site_service_graph
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMsoSchemaSiteServiceGraphConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.5.3/docs/data-sources/schema_site_service_graph#id DataMsoSchemaSiteServiceGraph#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.5.3/docs/data-sources/schema_site_service_graph#schema_id DataMsoSchemaSiteServiceGraph#schema_id}
  */
  readonly schemaId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.5.3/docs/data-sources/schema_site_service_graph#service_graph_name DataMsoSchemaSiteServiceGraph#service_graph_name}
  */
  readonly serviceGraphName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.5.3/docs/data-sources/schema_site_service_graph#site_id DataMsoSchemaSiteServiceGraph#site_id}
  */
  readonly siteId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.5.3/docs/data-sources/schema_site_service_graph#template_name DataMsoSchemaSiteServiceGraph#template_name}
  */
  readonly templateName: string;
}
export interface DataMsoSchemaSiteServiceGraphServiceNode {
}

export function dataMsoSchemaSiteServiceGraphServiceNodeToTerraform(struct?: DataMsoSchemaSiteServiceGraphServiceNode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMsoSchemaSiteServiceGraphServiceNodeToHclTerraform(struct?: DataMsoSchemaSiteServiceGraphServiceNode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMsoSchemaSiteServiceGraphServiceNodeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMsoSchemaSiteServiceGraphServiceNode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMsoSchemaSiteServiceGraphServiceNode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // consumer_connector_type - computed: true, optional: false, required: false
  public get consumerConnectorType() {
    return this.getStringAttribute('consumer_connector_type');
  }

  // consumer_interface - computed: true, optional: false, required: false
  public get consumerInterface() {
    return this.getStringAttribute('consumer_interface');
  }

  // device_dn - computed: true, optional: false, required: false
  public get deviceDn() {
    return this.getStringAttribute('device_dn');
  }

  // provider_connector_type - computed: true, optional: false, required: false
  public get providerConnectorType() {
    return this.getStringAttribute('provider_connector_type');
  }

  // provider_interface - computed: true, optional: false, required: false
  public get providerInterface() {
    return this.getStringAttribute('provider_interface');
  }
}

export class DataMsoSchemaSiteServiceGraphServiceNodeList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataMsoSchemaSiteServiceGraphServiceNodeOutputReference {
    return new DataMsoSchemaSiteServiceGraphServiceNodeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.5.3/docs/data-sources/schema_site_service_graph mso_schema_site_service_graph}
*/
export class DataMsoSchemaSiteServiceGraph extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mso_schema_site_service_graph";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMsoSchemaSiteServiceGraph resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMsoSchemaSiteServiceGraph to import
  * @param importFromId The id of the existing DataMsoSchemaSiteServiceGraph that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.5.3/docs/data-sources/schema_site_service_graph#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMsoSchemaSiteServiceGraph to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mso_schema_site_service_graph", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.5.3/docs/data-sources/schema_site_service_graph mso_schema_site_service_graph} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMsoSchemaSiteServiceGraphConfig
  */
  public constructor(scope: Construct, id: string, config: DataMsoSchemaSiteServiceGraphConfig) {
    super(scope, id, {
      terraformResourceType: 'mso_schema_site_service_graph',
      terraformGeneratorMetadata: {
        providerName: 'mso',
        providerVersion: '1.5.3'
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
    this._schemaId = config.schemaId;
    this._serviceGraphName = config.serviceGraphName;
    this._siteId = config.siteId;
    this._templateName = config.templateName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // schema_id - computed: false, optional: false, required: true
  private _schemaId?: string; 
  public get schemaId() {
    return this.getStringAttribute('schema_id');
  }
  public set schemaId(value: string) {
    this._schemaId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaIdInput() {
    return this._schemaId;
  }

  // service_graph_name - computed: false, optional: false, required: true
  private _serviceGraphName?: string; 
  public get serviceGraphName() {
    return this.getStringAttribute('service_graph_name');
  }
  public set serviceGraphName(value: string) {
    this._serviceGraphName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceGraphNameInput() {
    return this._serviceGraphName;
  }

  // service_node - computed: true, optional: false, required: false
  private _serviceNode = new DataMsoSchemaSiteServiceGraphServiceNodeList(this, "service_node", false);
  public get serviceNode() {
    return this._serviceNode;
  }

  // site_id - computed: false, optional: false, required: true
  private _siteId?: string; 
  public get siteId() {
    return this.getStringAttribute('site_id');
  }
  public set siteId(value: string) {
    this._siteId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdInput() {
    return this._siteId;
  }

  // template_name - computed: false, optional: false, required: true
  private _templateName?: string; 
  public get templateName() {
    return this.getStringAttribute('template_name');
  }
  public set templateName(value: string) {
    this._templateName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateNameInput() {
    return this._templateName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      schema_id: cdktf.stringToTerraform(this._schemaId),
      service_graph_name: cdktf.stringToTerraform(this._serviceGraphName),
      site_id: cdktf.stringToTerraform(this._siteId),
      template_name: cdktf.stringToTerraform(this._templateName),
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
      schema_id: {
        value: cdktf.stringToHclTerraform(this._schemaId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_graph_name: {
        value: cdktf.stringToHclTerraform(this._serviceGraphName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      site_id: {
        value: cdktf.stringToHclTerraform(this._siteId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_name: {
        value: cdktf.stringToHclTerraform(this._templateName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
